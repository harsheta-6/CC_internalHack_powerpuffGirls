const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const generateStory = async (name, userInput) => {
  try {
    const response = await fetch(`${API_URL}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        user_input: userInput,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate story');
    }
    return await response.json();
} catch (error) {
  console.error('Error generating story:', error);
  throw error;
}
};


export const continueStory = async (previousStory, userChoice, endStory = "False") => {
    try {
      const response = await fetch(`${API_URL}/continue`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          previous_story: previousStory,
          user_choice: userChoice,
          end_story: endStory,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to continue story');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error continuing story:', error);
      throw error;
    }
  };