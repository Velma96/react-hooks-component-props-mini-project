function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const timeEmojis = emoji.repeat(Math.ceil(minutes / (minutes < 30 ? 5 : 10)));
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <small>
          {timeEmojis} {minutes} min read
        </small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;
  
  