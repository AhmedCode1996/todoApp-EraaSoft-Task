const markup = (taskNumber, clearNumber)=> {
    return `
        <p>
            <span class="task-number">${taskNumber}</span>
            items left
        </p>
        <button>
            clear <span class="clear-number">${clearNumber}</span> completed item
        </button>
    `
}

export default markup;