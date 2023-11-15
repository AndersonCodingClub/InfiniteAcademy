import os
from typing import List, Tuple
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain


def get_topic_prompt() -> str:
    """Get the prompt to get fed for generating topics

    Returns:
        str: Prompt
    """
    context = "You are a teacher tasked with coming up with a curriculum for a student. Your tone is friendly, but to the point."
    general_task_description = "A student has just learned a topic and your job is to come up with one or more topics that the student should pursue next."
    specific_task_description = "Topic name: {topic_name} and this topic description {topic_description}. Make sure the topics you reccomend are just more advanced than the topic the student just went over. Your goal is to build difficulty slowly."
    format_instructions = "Format your response like this: [topic1, topic2,..topicn]. Remember, if the topic only has one logical next step, only return one topic in the same format ([topic])."

    return ' '.join([context, general_task_description, specific_task_description, format_instructions])

def get_next_nodes(node_name: str, node_content: str) -> List[Tuple[str]]:
    """Get the next child nodes of a given parent node based on its name + content
    
    Args:
        node_name (str): Name of the tree node
        node_content (str): Content of the tree node

    Returns:
        List[Tuple[str]]: List of (node name, node content) pairs
    """
    prompt = get_topic_prompt()
    prompt_template = PromptTemplate.from_template(prompt)
    llm_chain = LLMChain(llm=ChatOpenAI(model='gpt-3.5-turbo'), prompt=prompt_template)
    
    return llm_chain({'topic_name':node_name, 'topic_description':node_content})

if __name__ == '__main__':
    print(get_next_nodes('What is AI', 'AI (artificial intligence) is the study of how machines understand data. They are trained on data to make predictions.'))