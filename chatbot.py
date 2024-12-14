

import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import requests
import json

def call_llm(data, user_query):
    url = "https://api_v2.futurixai.com/api/lara/v1/completion"
    headers = {
        "Content-Type": "application/json",
        "api-subscription-key": "29190756-bf43-4575-a038-4aaa8e4361ab"
    }
    payload = {
        "messages": [
            {"role": "system", "content": "You are an expert assistant."},
            {"role": "user", "content": f"Data: {data}. Query: {user_query}"}
        ],
        "temperature": 0.8,
        "top_p": 0.8
    }
    response = requests.post(url, headers=headers, json=payload, verify=False)
    return response.json()


def main():
    st.title("Drishti_Chatbot")

    # File upload section
    uploaded_file = st.file_uploader("Upload your CSV file", type="csv")
    if uploaded_file is not None:
        # Load the CSV file
        df = pd.read_csv(uploaded_file)
        st.write("### Top 20 Rows of the Uploaded Data")
        st.dataframe(df.head(20))

        # User query input
        user_query = st.text_input("Enter your query about the data:")

        if user_query:
            st.write("Response")
            # Send top 20 rows and query to the LLM
            top_20_data = df.head(20).to_dict(orient="records")
            response = call_llm(json.dumps(top_20_data), user_query)
            st.write(response.get("answer", "No response from LLM"))

        # Basic Data Analysis
        st.write("### Data Analysis")
        st.write("#### Delivery Time Distribution")
        if "Delivery_Time" in df.columns:
            plt.figure(figsize=(10, 5))
            plt.hist(df["Delivery_Time"], bins=10, color="skyblue", edgecolor="black")
            plt.xlabel("Delivery Time (minutes)")
            plt.ylabel("Frequency")
            plt.title("Delivery Time Distribution")
            st.pyplot(plt)

        st.write("#### Agent Age Distribution")
        if "Agent_Age" in df.columns:
            plt.figure(figsize=(10, 5))
            plt.hist(df["Agent_Age"], bins=10, color="orange", edgecolor="black")
            plt.xlabel("Agent Age")
            plt.ylabel("Frequency")
            plt.title("Agent Age Distribution")
            st.pyplot(plt)

        st.write("#### Delivery Time vs Agent Rating")
        if "Delivery_Time" in df.columns and "Agent_Rating" in df.columns:
            plt.figure(figsize=(10, 5))
            plt.scatter(df["Agent_Rating"], df["Delivery_Time"], color="green")
            plt.xlabel("Agent Rating")
            plt.ylabel("Delivery Time (minutes)")
            plt.title("Delivery Time vs Agent Rating")
            st.pyplot(plt)

if __name__ == "__main__":
    main()
