import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <i className="fas fa-keyboard"></i> Клавиатурный тренажер
        </div>
        <div className="results">
          <div className="results-title">Результаты предыдущей строки:</div>
          <div className="indicators">
            <div className="indicator">
              <div className="indicator__icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <div className="indicator__name">Символов в минуту:</div>
              <div className="indicator__value" id="symbolsPerMinute">
                0
              </div>
            </div>
            <div className="indicator">
              <div className="indicator__icon">
                <i className="far fa-clock"></i>
              </div>
              <div className="indicator__name">Слов в минуту:</div>
              <div className="indicator__value">-</div>
            </div>
            <div className="indicator">
              <div className="indicator__icon">
                <i className="far fa-clock"></i>
              </div>
              <div className="indicator__name">Реальных слов в минуту:</div>
              <div className="indicator__value">-</div>
            </div>
            <div className="indicator">
              <div className="indicator__icon indicator__icon--errors">
                <i className="fas fa-exclamation-circle"></i>
              </div>
              <div className="indicator__name">Ошибок:</div>
              <div className="indicator__value" id="errorPercent">
                0%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="devider"></div>
      <div className="container">
        <form action="" onChange={undefined}>
          <input
            id="input"
						type="text"
						onChange={e => e.target.value}
            className="input unselectable"
            placeholder="Поле для ввода текста"
						value={"На переднем плане, прямо перед"}
          />
        </form>
      </div>
      <div className="text error">
        <div className="text" id="textExample">
          <div className="line line-1">
            <span className="done"> На переднем плане, прямо перед</span>
            <span className="hint">н</span>ами, расположен был дворик, где стоял
          </div>
          <div className="line">
            наполовину вычищенный автомобиль. Шофер Остин был на этот раз
          </div>
          <div className="line">
            уволен окончательно и бесповоротно. Он раскинулся на земле,
          </div>
          <div className="line hidden">
            и большая черная ссадина на лбу свидетельствовала, по-видимому, о
            том,
          </div>
          <div className="line hidden">
            что он при падении ударился головою о подножку или щит.
          </div>
        </div>

        <div className="keyboard">
          <div className="line">
            <div id="letter_ё">Ё</div>
            <div id="letter_1">1</div>
            <div id="letter_2">2</div>
            <div id="letter_3">3</div>
            <div id="letter_4">4</div>
            <div id="letter_5">5</div>
            <div id="letter_6">6</div>
            <div id="letter_7">7</div>
            <div id="letter_8">8</div>
            <div id="letter_9">9</div>
            <div id="letter_0">0</div>
            <div id="letter_minus">-</div>
            <div id="letter_plus">+</div>
            <div className="backspace" id="letter_backspace">
              Backspace
            </div>
          </div>
          <div className="line">
            <div className="tab" id="letter_tab">
              Tab
            </div>
            <div id="letter_й">Й</div>
            <div id="letter_ц">Ц</div>
            <div id="letter_у">У</div>
            <div id="letter_к">К</div>
            <div id="letter_е">Е</div>
            <div id="letter_н">Н</div>
            <div id="letter_г">Г</div>
            <div id="letter_ш">Ш</div>
            <div id="letter_щ">Щ</div>
            <div id="letter_з">З</div>
            <div id="letter_х">Х</div>
            <div id="letter_ъ">Ъ</div>
            <div id="letter_slash">\</div>
          </div>
          <div className="line">
            <div className="caps" id="letter_capslock">
              Caps Lock
            </div>
            <div id="letter_ф">Ф</div>
            <div id="letter_ы">Ы</div>
            <div id="letter_в">В</div>
            <div id="letter_а">А</div>
            <div id="letter_п">П</div>
            <div id="letter_р">Р</div>
            <div id="letter_о">О</div>
            <div id="letter_л">Л</div>
            <div id="letter_д">Д</div>
            <div id="letter_ж">Ж</div>
            <div id="letter_э">Э</div>
            <div className="enter" id="letter_enter">
              Enter
            </div>
          </div>
          <div className="line">
            <div className="shift">Shift</div>
            <div id="letter_я">Я</div>
            <div id="letter_ч">Ч</div>
            <div id="letter_с">С</div>
            <div id="letter_м">М</div>
            <div id="letter_и">И</div>
            <div id="letter_т">Т</div>
            <div id="letter_ь">Ь</div>
            <div id="letter_б">Б</div>
            <div id="letter_ю">Ю</div>
            <div id="letter_dot">
              . <sup>,</sup>
            </div>
            <div className="shift">Shift</div>
          </div>
          <div className="line">
            <div className="space" id="letter_space"></div>
            <div className="alt" id="letter_alt">
              Alt
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
