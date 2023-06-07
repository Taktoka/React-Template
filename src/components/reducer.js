export const initState = {
  social: [],
  works: [],
  skills: [],
  images: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "workApi":
      return { works: action.works };

    case "socialApi":
      return { social: action.social };

    case "skillsApi":
      return { skills: action.skills };

    case "imgApi":
      return { images: action.images };

    default:
      return state;
  }
};
