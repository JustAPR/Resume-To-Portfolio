import { Skill } from '../types/resume';

// Function to format the flat skills array into categorized skills
export const formatSkills = (skills: string[]): Skill[] => {
  const categorizedSkills: Skill[] = [];
  
  // Extract categories and items from the skills array
  skills.forEach(skill => {
    // Check if skill has a category prefix (contains ":")
    if (skill.includes(':')) {
      const [category, itemsString] = skill.split(':');
      const items = itemsString.split(',').map(item => item.trim());
      
      categorizedSkills.push({
        category: category.trim(),
        items
      });
    } else {
      // If no category is provided, add to "Other" category
      const otherCategory = categorizedSkills.find(cat => cat.category === 'Other');
      
      if (otherCategory) {
        otherCategory.items.push(skill.trim());
      } else {
        categorizedSkills.push({
          category: 'Other',
          items: [skill.trim()]
        });
      }
    }
  });
  
  return categorizedSkills;
};