import getpass
import os
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

os.environ["OPENAI_API_KEY"] = getpass.getpass()
model = ChatOpenAI(model="gpt-4o-mini")

system_template = "Translate the following from English into {language}"
prompt_template = ChatPromptTemplate.from_messages(
    [("system", system_template), ("user", "{text}")]
)

while True :
    print("Enter a language to translate to")
    lang = input()
    print("Enter a message to translate")
    message = input()
    prompt = prompt_template.invoke({"language": lang, "text": message})

    response = model.invoke(prompt)
    print(response.content)
    print("\n\n")