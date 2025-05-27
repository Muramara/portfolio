export interface Skill {
  name: string;
  level: number; // 0-100
}

export type SkillCategory = 'Frontend Development' | 'Backend Development' | 'UI/UX Design' | 'DevOps' | 'Tools & Technologies' | 'Soft Skills';

export const skills: Record<string, Skill[]> = {
  'Frontend Development': [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JSP', level: 94 },
    { name: 'JavaScript', level: 90 },
    // { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    // { name: 'Angular', level: 75 },
    // { name: 'Vue.js', level: 80 },
    { name: 'WordPress', level: 50 }
  ],
  'Backend Development': [
    { name: 'Node.js', level: 90 },
    { name: 'Express', level: 90 },
    { name: 'Java', level: 85 },
    // { name: 'Python', level: 75 },
    // { name: 'Django', level: 70 },
    // { name: 'GraphQL', level: 78 },
    { name: 'RESTful APIs', level: 88 },
    { name: 'PostgreSQL' , level: 90},
  ],
  'UI/UX Design': [
    // { name: 'Figma', level: 90 },
    // { name: 'Adobe XD', level: 85 },
    { name: 'Wireframing', level: 88 }
    // { name: 'Prototyping', level: 88 },
    // { name: 'User Research', level: 80 },
    // { name: 'Accessibility', level: 85 },
  ],
  'Tools & Technologies': [
    { name: 'Git/GitHub', level: 90 },
    { name: 'BitBucket', level: 90 },
    // { name: 'Webpack', level: 80 },
    // { name: 'Docker', level: 75 },
    // { name: 'Jest/Testing', level: 82 },
    { name: 'CI/CD', level: 75 }
    // { name: 'AWS', level: 72 },
  ],
  'Soft Skills': [
    { name: 'Communication', level: 92 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Collaboration', level: 95 },
    // { name: 'Project Management', level: 82 },
    { name: 'Adaptability', level: 88 },
    { name: 'Time Management', level: 95 },
  ],
};