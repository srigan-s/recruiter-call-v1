import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function RecruiterCall() {
  const [jobType, setJobType] = useState('');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [feedback, setFeedback] = useState('');

  const generateQuestion = async () => {
    const res = await fetch('/api/generate-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobType })
    });
    const data = await res.json();
    setQuestion(data.question);
  };

  const submitResponse = async () => {
    const res = await fetch('/api/analyze-response', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, response })
    });
    const data = await res.json();
    setFeedback(data.feedback);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recruiter Call Practice</h1>
      <Input
        placeholder="Enter job type (e.g., Software Engineer)"
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
      />
      <Button className="mt-2" onClick={generateQuestion}>Generate Question</Button>
      {question && (
        <div className="mt-4">
          <p className="font-semibold">Question:</p>
          <p>{question}</p>
          <Textarea
            className="mt-2"
            placeholder="Enter your response here"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          />
          <Button className="mt-2" onClick={submitResponse}>Submit Response</Button>
        </div>
      )}
      {feedback && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">Feedback:</p>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}
