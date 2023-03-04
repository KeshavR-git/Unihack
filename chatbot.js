const qAndAs = [
  {
    question: 'What is covid?',
    answer: 'covid is a contagious respiratory illness caused by the SARS-CoV-2 virus. It first appeared in Wuhan, China, in December 2019 and has since spread globally, causing a pandemic.'
  },
  {
    question: 'What are the symptoms of covid?',
    answer: 'The most common symptoms of covid include fever, cough, and shortness of breath. Other symptoms may include fatigue, body aches, headache, loss of taste or smell, sore throat, and congestion or runny nose.'
  },
  {
    question: 'How does covid spread?',
    answer: 'covid is primarily spread through respiratory droplets that are produced when an infected person talks, coughs, or sneezes. The virus can also spread by touching a surface or object contaminated with the virus and then touching your mouth, nose, or eyes.'
  },
  {
    question: 'How can I protect myself from covid?',
    answer: 'You can protect yourself from covid by wearing a mask, practicing physical distancing, washing your hands frequently with soap and water, avoiding large gatherings, and staying home when you are sick.'
  },
  {
    question: 'Is there a vaccine for covid?',
    answer: 'Yes, there are several vaccines that have been authorized for emergency use to prevent covid. These vaccines have been shown to be safe and effective at preventing covid and its complications.'
  },
  {
    question: 'What should I do if I think I have covid?',
    answer: 'If you think you have covid, you should stay home and self-isolate. You can get tested for covid to confirm whether or not you have the virus. If you have symptoms of covid or have been in close contact with someone who has covid, you should get tested.'
  },
  {
    question: 'How long does it take to recover from covid?',
    answer: 'The recovery time for covid varies depending on the severity of the illness. Most people with mild to moderate covid can recover at home without hospitalization. However, some people with severe covid may require hospitalization and intensive care. It can take several weeks or months to fully recover from covid.'
  },
  {
    question: 'What is the difference between covid and the flu?',
    answer: 'covid and the flu are both contagious respiratory illnesses, but they are caused by different viruses. covid is caused by the SARS-CoV-2 virus, while the flu is caused by influenza viruses. covid is generally more contagious and can cause more severe illness than the flu. The symptoms of covid and the flu can be similar, but there are some differences. For example, covid can cause loss of taste or smell, which is not a common symptom of the flu.'
  },
  {
    question: 'Can covid be transmitted through food?',
    answer: 'According to the Centers for Disease Control and Prevention (CDC), there is currently no evidence to suggest that covid can be transmitted through food or food packaging. The virus primarily spreads through respiratory droplets produced when an infected person talks, coughs, or sneezes.'
  },
  {
    question: 'What is herd immunity?',
    answer: 'Herd immunity is a form of indirect protection from infectious diseases that occurs when a large percentage of a population becomes immune to the disease, either through vaccination or previous infection. When a large portion of a population is immune to a disease, the spread of the disease is slowed or stopped, even among people who are not immune. Achieving herd immunity can help protect vulnerable populations who cannot get vaccinated, such as newborns or people with certain medical conditions.'
  },
  {
    question: 'What are the symptoms of covid?',
    answer: 'The symptoms of covid can vary from person to person, but common symptoms include fever or chills, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, and diarrhea.'
  },
  {
    question: 'How can I protect myself and others from covid?',
    answer: 'To protect yourself and others from covid, you should wash your hands often with soap and water, wear a mask in public settings, stay at least 6 feet away from others who do not live with you, avoid crowds and poorly ventilated spaces, cover your coughs and sneezes with a tissue or your elbow, clean and disinfect frequently touched surfaces, and monitor your health for symptoms of covid.'
  },
  {
    question: 'When should I wear a mask?',
    answer: 'You should wear a mask when you are in public settings, especially when it is difficult to maintain social distancing. This includes places like grocery stores, pharmacies, and public transportation. You should also wear a mask when you are around people who do not live with you, such as when you are visiting friends or family. In general, you should wear a mask whenever you are indoors with people who are not in your immediate household.'
  },
  {
    question: 'What is contact tracing?',
    answer: 'Contact tracing is the process of identifying and notifying people who have been in close contact with someone who has tested positive for covid. This helps to prevent the spread of the virus by identifying people who may have been exposed and encouraging them to self-quarantine or get tested. Contact tracing is typically done by public health officials, who work with infected individuals to identify their close contacts and notify them of their potential exposure.'
  },
  {
    question: 'What is the covid vaccine?',
    answer: 'The covid vaccine is a vaccine that is designed to prevent covid. There are several different types of covid vaccines available, but all of them work by teaching the immune system how to recognize and fight the virus that causes covid. The covid vaccines have been shown to be safe and effective in clinical trials, and are an important tool in the fight against the covid pandemic.'
  },
  {
    question: 'What is covid?',
    answer: 'covid is an infectious disease caused by the SARS-CoV-2 virus. It was first identified in Wuhan, China in December 2019, and has since become a global pandemic. The virus spreads primarily through respiratory droplets when an infected person talks, coughs, or sneezes, and can cause a range of symptoms from mild to severe.'
  },
  {
    question: 'Who is at risk of severe illness from covid?',
    answer: 'Older adults and people with underlying medical conditions, such as heart disease, lung disease, or diabetes, are at increased risk of severe illness from covid. However, people of all ages can become seriously ill from the virus, and it is important to take precautions to protect yourself and others.'
  },
  {
    question: 'What should I do if I think I have covid?',
    answer: 'If you think you have covid, you should stay home and self-isolate to avoid spreading the virus to others. You should also contact your healthcare provider for advice on what to do next, as they may recommend that you get tested for the virus. If you are experiencing severe symptoms, such as difficulty breathing, you should seek medical attention immediately.'
  },
  {
    question: 'How is covid treated?',
    answer: 'There is currently no specific treatment for covid, but there are treatments available that can help to manage symptoms and support the body’s natural defenses. Treatment may include rest, fluids, and over-the-counter medications for pain and fever. In more severe cases, hospitalization may be required.'
  },
  {
    question: 'Can I get covid from touching a surface?',
    answer: 'It is possible to get covid from touching a surface that has the virus on it and then touching your face, but this is not thought to be the main way that the virus spreads. The virus spreads primarily through respiratory droplets when an infected person talks, coughs, or sneezes, so it is important to wear a mask and practice social distancing to reduce the risk of getting or spreading the virus.'
  }
];


// Function to calculate the Levenshtein distance between two strings
function levenshteinDistance(s, t) {
  const m = s.length, n = t.length;
  let d = Array.from(Array(m+1), () => Array(n+1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    d[i][0] = i;
  }
  
  for (let j = 1; j <= n; j++) {
    d[0][j] = j;
  }
  
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= m; i++) {
      if (s[i-1] === t[j-1]) {
        d[i][j] = d[i-1][j-1];
      } else {
        d[i][j] = Math.min(
          d[i-1][j] + 1,
          d[i][j-1] + 1,
          d[i-1][j-1] + 1
        );
      }
    }
  }
  
  return d[m][n];
}

// Function to find the Q&A pair that best matches the user input
function matchQandA(userInput) {
  let minDistance = Number.MAX_SAFE_INTEGER;
  let bestMatch = null;
  
  qAndAs.forEach(qAndA => {
    const distance = levenshteinDistance(userInput.toLowerCase(), qAndA.question.toLowerCase());
    if (distance < minDistance) {
      minDistance = distance;
      bestMatch = qAndA;
    }
  });
  
  return bestMatch;
}

// Example usage
const userInput = 'what is your fav color';
const matchedQandA = matchQandA(userInput);
console.log(matchedQandA.answer);

      // Define the qAndAs array and the matchQandA function
      
      function handleUserInput() {
        const userInput = document.getElementById('user-input').value;
        const matchedQandA = matchQandA(userInput);
        document.getElementById('chatbot-response').textContent = matchedQandA.answer;
      }
