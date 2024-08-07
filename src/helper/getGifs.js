export const getGif = async ({ category }) => {
  try {
    const apiKey = "qchIkmW72Jy2ScLphkDKqBNYIUy0m5AW";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(
      category
    )}&limit=10`;

    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    console.log(gifs);
    return gifs;
  } catch (error) {
    console.error("Error fetching gifs:", error);
    return [];
  }
};
