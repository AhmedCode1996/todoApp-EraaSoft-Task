const markup = (value) => {
  return `
    <div class="task">
        <input type="checkbox" name="task" id="task-${value}" />
        <img
        class="check-image"
        src="./assets/checkBox.png"
        alt="check image"
        />
        <label for="task-${value}">${value}</label>
        <button class="close-btn">
         <img src="./assets/close-task-dark.png" alt="close" />
        </button>
  </div>
    `;
};

export default markup;
