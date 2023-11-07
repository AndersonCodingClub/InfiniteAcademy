from typing import Callable, List

class Node:
    def __init__(self, title: str, parent=None, child=None, action: Callable=None) -> None:
        """Initializes Node class

        Args:
            title (str): Display name of the node 
            parent (Node, optional): Parent node. Defaults to None.
            child (Node, optional): Child node. Defaults to None.
            action (Iterable, optional): Action associated with the node (ex. diagonstic). Defaults to None.
        """
        self.title = title
        self.parent = parent
        self.children = [] if child is None else child
        self.action = action

    def add_child(self, child_node) -> None:
        """Helper method to add child node 

        Args:
            child_node (Node): Child node to be added to parent
        """
        child_node.parent = self
        self.children.append(child_node)

def update_node(curr_node: Node, node_titles: List[str], i:int=1) -> Node:
    """Recursive function to link children nodes to their parent node

    Args:
        curr_node (Node): Node to update
        node_titles (List[str]): List of node names (used to create new child nodes)
        i (int, optional): Recursive variable for indexing child nodes. Defaults to 1.

    Returns:
        Node: Resulting node from recursion
    """
    # Base case: return if there are no more titles to process
    if i >= len(node_titles):
        return curr_node

    # Create a new child node
    child_node = Node(title=node_titles[i])

    # Link the current node with the child node
    curr_node.add_child(child_node)

    # Recursive case: update the child node with the next title
    update_node(child_node, node_titles, i+1)

    return curr_node
       
def construct_new_tree(category: str) -> Node:
    """Create parent node

    Args:
        category (str): Category to construct tree for

    Returns:
        Node: Parent node w/ all other child nodes under it
    """
    parent_node = None

    if category == 'programming':
        node_titles = ['Programming', 'What is Programming?', 'Hello World', 'Conditionals', 'Loops', 'Functions']
        parent_node = Node(title=node_titles[0])
        update_node(curr_node=parent_node, node_titles=node_titles)
        
    elif category == 'investing':
        pass
    elif category == 'math':
        pass

    return parent_node

def print_tree(node, level: int=0) -> None:
    """Recursively print string representation of the node

    Args:
        node (Node): Node to print
        level (int, optional): Recursion variable to traverse the node. Defaults to 0.
    """
    print(' ' * (level * 4) + node.title)
    for child in node.children:
        print_tree(child, level + 1)