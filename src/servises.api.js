import axios from "axios";

export const fetchhImages = async (query, page = 0) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      page: page,
      per_page: 12,
      client_id: "1KsOJX6nVcVINxZ0frPJ6dkOEqVBbgzcsjMhARspCAw",
      orientation: "portrait",
    },
  });

  return {
    imeges: response.data.results,
    totalPages: Math.ceil(response.data.total_pages / 12),
  };
};
