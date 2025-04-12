"use client";

import { JSX, use } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CircularProgressColorDemo from "@/components/ui/circle-progress";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUp } from "lucide-react";

import { useFetchResumeDataQuery } from "@/app/api/resume";

interface AnalysedResumePageProps {
  params: Promise<{ slug: string }>;
}

export default function AnalysedResumePage({
  params,
}: Readonly<AnalysedResumePageProps>) {
  const resolvedParams = use(params);
  const resumeId = resolvedParams.slug;

  // const {
  //   data: analysisData,
  //   isLoading,
  //   isError,
  //   error,
  // } = useFetchResumeDataQuery(resumeId);

  // if (isLoading) {
  //   return <div>Loading analysis data...</div>;
  // }

  // if (isError || !analysisData) {
  //   return (
  //     <div>
  //       Error: {error?.message || "Failed to load analysis data."}
  //     </div>
  //   );
  // }

  const analysisData = {
    grammar_analysis: {
      recommendations: [
        "Consider breaking down long bullet points into shorter, more digestible sentences.",
        'Examples of long sentences: "Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (41 tokens)',
        "Missing personal information section with contact details.",
      ],
      score: 83,
      section_scores: {
        action_verbs: {
          category: "High",
          details: {
            avg_verb_strength_score: 0.87,
            bullet_count: 11,
            diversity_ratio: 1.0,
            missing_verb_bullet_examples: [],
            missing_verb_ratio: 0.0,
            weak_verb_examples: {},
          },
          score: 85,
        },
        active_voice: {
          category: "Very High",
          details: {
            passive_ratio: 0.0,
            passive_sentence_count: 0,
            passive_sentence_examples: [],
            sentence_count: 13,
          },
          score: 100,
        },
        bullet_points: {
          category: "Very High",
          details: {
            avg_bullet_word_length: 20.6,
            avg_bullets_per_job: 2.0,
            jobs_with_zero_bullets: 0,
            long_bullet_examples: [
              '"Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (31 words)',
            ],
            percent_bullets_starting_verb: 100,
            short_bullet_examples: [],
            total_bullets: 11,
            total_jobs_analyzed: 2,
          },
          score: 100,
        },
        completeness: {
          category: "Very High",
          details: {
            missing_essential_sections: [],
            missing_recommended_sections: ["certifications"],
            present_recommended_count: 2,
            present_sections: [
              "education",
              "keywords",
              "personal_info",
              "projects",
              "summary",
              "work_experience",
            ],
          },
          score: 100,
        },
        industry_fit: {
          category: "High",
          details: {
            boost_reason: "Boosted to High based on absolute match count (42)",
            keywords_found_in_skills: [
              "activemq",
              "ai",
              "flask",
              "git",
              "github",
              "java",
              "jenkins",
              "keras",
              "matplotlib",
              "ml",
              "mongodb",
              "nltk",
              "numpy",
              "pandas",
              "power bi",
              "puppet",
              "python",
              "pytorch",
              "r",
              "scikit-learn",
              "seaborn",
              "spark",
              "sql",
              "tableau",
              "tensorflow",
              "xgboost",
            ],
            match_ratio: 0.08,
            matched_keyword_count: 42,
            target_industry: "tech",
            total_industry_keywords: 522,
          },
          score: 85,
        },
        length: {
          category: "Very High",
          details: {
            total_bullet_meaningful_word_count: 227,
          },
          score: 100,
        },
        quantifiable: {
          category: "Very High",
          details: {
            impact_keywords_without_metrics_count: 0,
            non_quantified_impact_examples: [],
            quantified_bullet_count: 11,
            quantified_bullet_examples: [
              "Automated I-STAR/GV deployment using Jenkins, reducing manual intervention by 70...",
              "Collaborated on a state-of-the-art machine learning model to forecast COVID-19 s...",
            ],
            quantified_ratio: 1.0,
            total_bullets: 11,
          },
          score: 100,
        },
        sentence_structure: {
          category: "Medium",
          details: {
            avg_sentence_length_tokens: 26.9,
            "long_sentence_count (>40 tokens)": 1,
            long_sentence_examples: [
              '"Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (41 tokens)',
            ],
            sentence_count: 11,
            "short_sentence_count (<8 tokens)": 0,
            short_sentence_examples: [],
            std_dev_sentence_length: 6.9,
          },
          score: 70,
        },
        skills_format: {
          category: "High",
          details: {
            detected_categorization_heuristic: false,
            skill_count: 35,
            verbose_skill_examples: [],
          },
          score: 85,
        },
      },
    },
    justifications:
      'Overall Score: 83/100.\nAssessment: Strong. This reflects the analysis across key resume components:\n\n--- Detailed Analysis ---\n\n* Action Verbs (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.\n\n* Active Voice (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.\n\n* Bullet Points (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.  - Detail: Overly long bullet points found, e.g., "Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (31 words)\n\n* Completeness (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.\n\n* Industry Fit (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.\n\n* Length (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.\n\n* Quantifiable (Category: Very High, Score: 100/100):  - Outcome: Exceptionally strong performance.\n\n* Sentence Structure (Category: Medium, Score: 70/100):  - Outcome: Adequate, meets baseline expectations but could be improved.  - Detail: Overly long sentences found, e.g., "Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, H..." (41 tokens)\n\n* Skills Format (Category: High, Score: 85/100):  - Outcome: Strong performance, meets high standards.\n\n--- Overall Recommendation ---\nFocus on minor refinements suggested.',
    overall_score: 78.4,
    resume_data: {
      certifications: [],
      education: [
        {
          degree: "B.Tech in Artificial Intelligence and Data Science",
          graduation_date: "2021 – 2025",
          institution: "Sikkim Manipal Institute of Technology",
        },
      ],
      keywords: [
        "Python",
        "Java",
        "R",
        "Power BI",
        "Tableau",
        "Looker",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-Learn",
        "XGBoost",
        "Prophet",
        "Spark",
        "Flask",
        "Streamlit",
        "Gradio",
        "NLTK",
        "Hugging Face",
        "LlamaIndex",
        "Plotly",
        "Matplotlib",
        "Seaborn",
        "Git",
        "GitHub",
        "Apache Tomcat",
        "ActiveMQ",
        "Pandas",
        "Numpy",
        "SQL",
        "MongoDB",
        "Jenkins",
        "Puppet",
        "Leadership",
        "Team Collaboration",
        "Analytical Reasoning",
      ],
      personal_info: [
        {
          email: "shivamsourav2003@gmail.com",
          name: "Shivam Sourav",
          phone: "8521846844",
        },
      ],
      projects: [
        {
          description: [
            "Innovated a tokenizer by training a SentencePiece model on the Nepali corpus, achieving an 80% reduction in token count.",
            "Optimized Google’s Gemma2 9B model for language comprehension through continual pretraining on a Nepali corpus with a trained SentencePiece tokenizer, achieving a 25% improvement in task accuracy.",
            "Engineered a chatbot enabling effective textual communication in Nepali, boosting user engagement by 30%.",
          ],
          name: "Nepali LLM - Advanced Nepali Language Model",
        },
        {
          description: [
            "Designed an AI-driven resume analyzer using Streamlit, integrating LlamaIndex, HuggingFace embeddings, and the Groq platform, powered by Meta’s Llama-3.1 8B model, achieving a 40% improvement in resume and jd matching accuracy.",
            "Executed in-depth analysis using TF-IDF, reducing irrelevant data points by 30%.",
          ],
          name: "Khojo Bhai - AI-Powered Resume Analyzer Project",
        },
        {
          description: [
            "Refined the Mistral AI7B LLM model using QLoRA (Quantized Low-Rank Adapters), achieving 80% headline relevance accuracy.",
            "Mobilized Unsloth to fine-tune LLMs, improving their performance by 35% across diverse news topics and styles and reducing model training time by 50%.",
          ],
          name: "News Headline Generator",
        },
      ],
      summary:
        "Shivam Sourav is a highly skilled professional with experience in software engineering and data science. He has worked on multiple projects, including refining the Mistral AI7B LLM model using QLoRA, achieving 80% headline relevance accuracy and mobilizing Unsloth to fine-tune LLMs, improving their performance by 35% across diverse news topics and styles and reducing model training time by 50%. He has expertise in programming languages such as Python, Java, and R, and has experience with frameworks and technologies like TensorFlow, PyTorch, Keras, and Scikit-Learn. He has also worked with databases like SQL and MongoDB, and has experience with Jenkins, Puppet, and leadership. His work experience includes roles such as Associate Software Engineer Intern at Nomura Research Institute and Financial Technology, and Machine Learning Engineer at Omdena, where he contributed to various machine learning projects.",
      work_experience: [
        {
          company: "Nomura Research Institute and Financial Technology",
          dates: "08/2024 – Present",
          job_title: "Associate Software Engineer Intern",
          responsibilities: [
            "Automated I-STAR/GV deployment using Jenkins, reducing manual intervention by 70% and ensuring consistent deployment across environments.",
          ],
        },
        {
          company: "Omdena",
          dates: "11/2023 – 06/2024",
          job_title: "Machine Learning Engineer",
          responsibilities: [
            "Collaborated on a state-of-the-art machine learning model to forecast COVID-19 spread in Kitwe, Zambia, leveraging CatBoost and XGBoost, achieving a 95% prediction accuracy.",
            "Spearheaded the development of predictive models for flood prediction and waterbody forecasting in Bangladesh, utilizing XGBoost and LSTM, attaining a 92% prediction accuracy.",
            "Led a cross-functional subgroup of 10 members in data preprocessing and feature engineering, boosting overall team efficiency by 25% within a 40-member project team.",
          ],
        },
      ],
    },
    technical_score: {
      job_description_responsibilities:
        "The ideal candidate will leverage their expertise to design, develop, and deploy cutting-edge solutions, contributing to various projects from NLP to predictive modeling. In this role, you will be responsible for developing and fine-tuning language models, creating robust APIs for data processing, and building intuitive dashboards for data visualization. You will utilize your proficiency in Python, Java, and R, along with frameworks such as TensorFlow, PyTorch, and Scikit-learn, to implement machine learning and deep learning models. Strong experience with cloud technologies, CI/CD pipelines (Jenkins/Docker), and database management (SQL, MongoDB) is essential. The candidate should demonstrate excellent analytical reasoning, problem-solving skills, and the ability to collaborate effectively within a team.",
      justification: {
        experience_and_projects:
          "Calculated as semantic similarity between the Job Description text and the provided Resume Summary. Comparing Job Description against the overall Resume Summary. Similarity score between JD and resume summary: 0.468",
        overall:
          "Job classified as technical: True. Using technical weights: Summary/Experience=30%, Skills=70%. Weighted average score before bonus: 67.58%. Required keyword match bonus (15.0% factor applied to weighted score * required match %): +7.75%. Final Score (Weighted Avg + Bonus, capped at 100%): 75.34%. Pass: False.",
        skills:
          "Resume skills processed: 35 Required skills found (13/17) using similarity >=0.75: ['analytical reasoning', 'deep learning', 'java', 'jenkins', 'machine learning', 'mongodb', 'python', 'pytorch', 'r', 'scikit-learn', 'sql', 'team collaboration', 'tensorflow']. Required skills missing: ['ci/cd pipelines', 'cloud technologies', 'docker', 'problem-solving skills']. Required skill match percentage: 76.47%. Final Skills Score : 76.47%.",
      },
      notes: "Pass Threshold: 80.0%. Tech job: True.",
      pass: false,
      preferred_skills_found: [],
      required_skill_match_percentage: 76.47,
      required_skills_found: [
        "analytical reasoning",
        "deep learning",
        "java",
        "jenkins",
        "machine learning",
        "mongodb",
        "python",
        "pytorch",
        "r",
        "scikit-learn",
        "sql",
        "team collaboration",
        "tensorflow",
      ],
      required_skills_found_count: 13,
      required_skills_missing: [
        "ci/cd pipelines",
        "cloud technologies",
        "docker",
        "problem-solving skills",
      ],
      section_scores: {
        experience_and_projects: 46.85,
        skills: 76.47,
      },
      similarity_score: 75.34,
      skill_match_details: {
        "analytical reasoning": ["analytical reasoning", 1.0],
        "deep learning": ["tensorflow", 0.8282],
        java: ["java", 1.0],
        jenkins: ["jenkins", 1.0],
        "machine learning": ["tensorflow", 0.8121],
        mongodb: ["mongodb", 1.0],
        python: ["python", 1.0],
        pytorch: ["pytorch", 1.0],
        r: ["r", 1.0],
        "scikit-learn": ["scikit-learn", 1.0],
        sql: ["sql", 1.0],
        "team collaboration": ["team collaboration", 1.0],
        tensorflow: ["tensorflow", 0.9999],
      },
      total_required_skills_in_jd: 17,
    },
  };

  const CardData = [
    {
      title: "Overall Score",
      description: "Needs Significant Revision",
      data: analysisData?.overall_score,
      progressColor: "stroke-indigo-500",
      cardFooterLeft: "Last Scan",
      cardFooterRight: "XXXXXXXXX",
    },
    {
      title: "Technical Score",
      description: {
        return: () => (
          <div className="flex gap-3">
            <Badge variant={"secondary"} className="text-red-500 bg-red-100">
              <ArrowDown />
              5%
            </Badge>
            <span>
              {analysisData?.technical_score?.required_skill_match_percentage}%
              skill match
            </span>
          </div>
        ),
      },
      data: {
        return: () => <>{75.34}</>,
      },
      progressColor: "stroke-violet-500",
      cardFooterLeft: "Target Job",
      cardFooterRight: "XXXXXXXXX",
    },
    {
      title: "Grammar Score",
      description: {
        return: () => (
          <div className="flex gap-3">
            <Badge
              variant={"secondary"}
              className="text-green-700 bg-green-100"
            >
              <ArrowUp />
              5%
            </Badge>
            <span>Grammar and Structure</span>
          </div>
        ),
      },
      data: {
        return: () => <>{analysisData?.grammar_analysis?.score}</>,
      },
      progressColor: "stroke-green-500",
      cardFooterLeft: "Action Needed",
      cardFooterRight: `${analysisData?.grammar_analysis?.recommendations?.length} recommendations`,
    },
  ];

  console.log(analysisData);

  return (
    <div className="">
      <div className="text-xl font-bold mb-5">
        Resume Analysis for Resume ID: {resumeId}
      </div>
      <div className="flex gap-5 my-4">
        {CardData.map((cardData) => (
          <Card className="w-full" key={cardData?.title}>
            <div className="w-full flex flex-row">
              <CardHeader className="w-full flex flex-col">
                <CardTitle className="text-muted-foreground">
                  {cardData?.title}
                </CardTitle>
                <CardTitle>
                  <span className="text-3xl">
                    {analysisData?.overall_score}
                  </span>
                  <span>/100</span>
                </CardTitle>
                <CardDescription>
                  {typeof cardData?.description === "string"
                    ? cardData?.description
                    : typeof cardData?.description === "object" &&
                      cardData?.description !== null &&
                      typeof (
                        cardData?.description as { return: () => JSX.Element }
                      ).return === "function"
                    ? (
                        cardData?.description as { return: () => JSX.Element }
                      ).return()
                    : null}
                </CardDescription>
              </CardHeader>

              <CircularProgressColorDemo
                value={analysisData?.overall_score ?? 0}
                size={120}
                strokeWidth={10}
                showLabel
                labelClassName="text-md font-bold"
                renderLabel={(progress) => `${progress}%`}
                className={`stroke-indigo-500/10`}
                progressClassName={`${cardData?.progressColor}`}
              />
            </div>
            <hr className="border-b-slate-500 mx-6" />
            <div className="flex text-xs justify-between text-slate-500">
              <div className="px-6">{cardData?.cardFooterLeft}</div>
              <div className="px-6">{cardData?.cardFooterRight}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex w-full gap-4">
        <Card className="w-1/2">
          <CardHeader className="flex w-full justify-between">
            <CardTitle>Technical Breakdown</CardTitle>
            <CardTitle className="flex gap-2">
              <Badge variant={"secondary"} className="bg-green-100 text-green-700">3/9 skills</Badge>
              <Badge className="bg-blue-100 text-blue-700">{analysisData?.technical_score?.required_skill_match_percentage}% skills</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Grammar Breakdown</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
}
