import React, { useEffect, useState } from 'react';
import './App.css';
import { Alert, Button, Card, Layout, Modal, Radio, Space } from 'antd';

const { Header, Content, Footer } = Layout;


function App() {
  // Data loading
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const [choices, setChoices] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setQuestions(result);
          setQuestion(result[0]);
          setChoices(result[0].choices);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  // Radio group bindings
  const [value, setValue] = useState(0);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  // Question bindings
  const [questionIndex, setQuestionIndex] = useState(0);

  const next = () => {
    setQuestionIndex(questionIndex + 1);
    setQuestion(questions[questionIndex + 1]);
    setChoices(questions[questionIndex + 1].choices);
  }

  // Answer Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    next();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading... </div>;
  } else {
    return (
      <div className="App">
        <Layout>
          <Header>Monkey</Header>
          <Content>

            <div>
              <Card title="Trivia" style={{ width: 400 }}>
                <p>
                  {question.title}
                </p>
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    {choices.map((c, index) => (
                      <Radio key={index} value={index}>{c}
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
                <div style={{ marginTop: 10 }}>
                  <Button onClick={showModal} type="primary">Submit</Button>
                </div>
              </Card>
            </div>
            <div>
              <Modal title="Answer" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {choices[value] === question.correct
                  ? <Alert message="Right!" type="success" />
                  : <Alert message="Wrong" type="error" />
                }
                <div>Correct Answer: {question.correct}</div>
              </Modal>
            </div>
          </Content>
          <Footer>❖™️</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
