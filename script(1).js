const DATA = {
  funcoes: [
    {
      titulo: "Regula a temperatura",
      desc: "Através do suor, a água ajuda o corpo a se resfriar e manter a temperatura interna estável, mesmo em dias quentes ou durante o exercício.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 14.76V4a2 2 0 1 0-4 0v10.76a4 4 0 1 0 4 0Z"/><line x1="9" y1="9" x2="12" y2="9"/></svg>`,
    },
    {
      titulo: "Transporta nutrientes",
      desc: "É o meio pelo qual vitaminas, minerais e glicose viajam da digestão até cada célula do corpo através do sangue.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2C12 2 5 11.5 5 16.2C5 20 8.13 23 12 23C15.87 23 19 20 19 16.2C19 11.5 12 2 12 2Z"/><path d="M9 16c1 1.2 5 1.2 6 0"/></svg>`,
    },
    {
      titulo: "Protege articulações",
      desc: "A água compõe o líquido sinovial, que lubrifica as articulações e amortece impactos durante o movimento.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>`,
    },
    {
      titulo: "Elimina toxinas",
      desc: "Os rins dependem da água para filtrar resíduos do sangue e expulsá-los do corpo através da urina.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h8l4 6-8 12L2 9Z"/><path d="M6 3l4 6-2 12"/><path d="M14 3l-4 6 2 12"/></svg>`,
    },
    {
      titulo: "Mantém o cérebro ativo",
      desc: "Mesmo uma desidratação leve pode afetar concentração, memória e humor — o cérebro é cerca de 75% água.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 18c-3 0-5-2.5-5-5.5S6 6 9 6c1 0 2 .4 2.6 1.1C12.2 6.4 13.2 6 14.5 6 17.5 6 20 8.5 20 12s-2.5 6-5.5 6c-1 0-1.9-.3-2.6-.8"/><path d="M9 18v2M14.5 18v2"/></svg>`,
    },
    {
      titulo: "Equilibra a pressão",
      desc: "O volume de água no sangue influencia diretamente a pressão arterial e o bom funcionamento do coração.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6Z"/></svg>`,
    },
  ],

  ciclo: [
    {
      titulo: "O ciclo da água",
      texto: "A água evapora dos oceanos, forma nuvens, cai como chuva e escorre de volta para rios e mares — um circuito contínuo que sustenta toda a vida no planeta.",
    },
    {
      titulo: "Só 2,5% é água doce",
      texto: "A grande maioria da água da Terra é salgada. Da pequena fração de água doce, boa parte está presa em geleiras e não é facilmente acessível.",
    },
    {
      titulo: "Estresse hídrico",
      texto: "Regiões inteiras já enfrentam escassez sazonal ou permanente de água, afetando agricultura, saúde pública e migração de populações.",
    },
    {
      titulo: "Consumo invisível",
      texto: "Produzir um quilo de carne bovina pode consumir milhares de litros de água ao longo da cadeia produtiva — muito mais do que bebemos diretamente.",
    },
    {
      titulo: "Cada gota tem valor",
      texto: "Pequenas mudanças de hábito, como reduzir banhos longos e reaproveitar água, fazem diferença real quando multiplicadas por milhões de pessoas.",
    },
  ],

  dicas: [
    {
      tom: "a",
      titulo: "Comece o dia com um copo d'água",
      texto: "Depois de horas de sono, o corpo já está parcialmente desidratado. Um copo ao acordar reativa o metabolismo.",
    },
    {
      tom: "b",
      titulo: "Leve uma garrafa reutilizável",
      texto: "Ter água por perto reduz o esquecimento e ainda evita o uso de embalagens descartáveis.",
    },
    {
      tom: "c",
      titulo: "Coma alimentos ricos em água",
      texto: "Pepino, melancia e laranja ajudam na hidratação e ainda somam fibras e vitaminas à dieta.",
    },
    {
      tom: "a",
      titulo: "Beba mais durante o exercício",
      texto: "O suor aumenta a perda de líquidos — repor água antes, durante e depois da atividade evita queda de desempenho.",
    },
    {
      tom: "b",
      titulo: "Observe a cor da urina",
      texto: "Um tom amarelo claro geralmente indica boa hidratação; tons escuros são um sinal para beber mais água.",
    },
    {
      tom: "c",
      titulo: "Defina lembretes ao longo do dia",
      texto: "Alarmes simples no celular ajudam a espalhar o consumo de água em vez de concentrá-lo em poucos momentos.",
    },
  ],
};

const Render = {
  cards() {
    const grid = document.getElementById("cardsGrid");
    grid.innerHTML = DATA.funcoes
      .map(
        (item) => `
      <article class="card" role="listitem">
        <div class="card__icon" aria-hidden="true">${item.icon}</div>
        <h3 class="card__title">${item.titulo}</h3>
        <p class="card__desc">${item.desc}</p>
      </article>`
      )
      .join("");
  },

  accordion() {
    const wrap = document.getElementById("accordion");
    wrap.innerHTML = DATA.ciclo
      .map((item, i) => {
        const id = `acc-${i}`;
        return `
        <div class="accordion__item">
          <h3>
            <button type="button" class="accordion__trigger" id="${id}-trigger"
              aria-expanded="false" aria-controls="${id}-panel">
              <span>${item.titulo}</span>
              <span class="accordion__icon" aria-hidden="true">+</span>
            </button>
          </h3>
          <div class="accordion__panel" id="${id}-panel" role="region" aria-labelledby="${id}-trigger" data-open="false">
            <div class="accordion__panel-inner">
              <p>${item.texto}</p>
            </div>
          </div>
        </div>`;
      })
      .join("");
  },

  carousel() {
    const track = document.getElementById("carouselTrack");
    const dots = document.getElementById("carouselDots");

    track.innerHTML = DATA.dicas
      .map(
        (item, i) => `
      <li class="carousel__slide" data-tone="${item.tom}" role="group"
          aria-roledescription="slide" aria-label="Dica ${i + 1} de ${DATA.dicas.length}">
        <div>
          <p class="carousel__slide-number">Dica ${String(i + 1).padStart(2, "0")} / ${String(DATA.dicas.length).padStart(2, "0")}</p>
          <h3>${item.titulo}</h3>
          <p>${item.texto}</p>
        </div>
      </li>`
      )
      .join("");

    dots.innerHTML = DATA.dicas
      .map(
        (_, i) => `
      <button type="button" class="carousel__dot" role="tab"
        aria-selected="${i === 0}" aria-label="Ir para dica ${i + 1}" data-index="${i}"></button>`
      )
      .join("");
  },

  all() {
    this.cards();
    this.accordion();
    this.carousel();
  },
};

const A11y = {
  MIN: 0.85,
  MAX: 1.3,
  STEP: 0.1,

  init() {
    const savedScale = parseFloat(localStorage.getItem("oi-font-scale"));
    if (!isNaN(savedScale)) {
      document.documentElement.style.setProperty("--font-scale", savedScale);
    }

    const savedContrast = localStorage.getItem("oi-high-contrast") === "true";
    document.body.classList.toggle("high-contrast", savedContrast);
    document.getElementById("contrastToggle").setAttribute("aria-pressed", String(savedContrast));

    document.getElementById("fontIncrease").addEventListener("click", () => this.changeFont(this.STEP));
    document.getElementById("fontDecrease").addEventListener("click", () => this.changeFont(-this.STEP));
    document.getElementById("fontReset").addEventListener("click", () => this.setFont(1));
    document.getElementById("contrastToggle").addEventListener("click", () => this.toggleContrast());
  },

  changeFont(delta) {
    const current = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--font-scale")) || 1;
    this.setFont(current + delta);
  },

  setFont(value) {
    const clamped = Math.min(this.MAX, Math.max(this.MIN, value));
    document.documentElement.style.setProperty("--font-scale", clamped.toFixed(2));
    localStorage.setItem("oi-font-scale", clamped.toFixed(2));
  },

  toggleContrast() {
    const isOn = document.body.classList.toggle("high-contrast");
    document.getElementById("contrastToggle").setAttribute("aria-pressed", String(isOn));
    localStorage.setItem("oi-high-contrast", String(isOn));
  },
};

const ScrollReveal = {
  init() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((el) => observer.observe(el));
  },
};

const DepthGauge = {
  init() {
    this.fill = document.getElementById("depthFill");
    this.label = document.getElementById("depthLabel");
    this.update();
    window.addEventListener("scroll", () => this.update(), { passive: true });
    window.addEventListener("resize", () => this.update());
  },
  update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    this.fill.style.width = percent + "%";
    this.fill.style.height = percent + "%";
    this.label.textContent = Math.round(percent) + "%";
  },
};

const Accordion = {
  init() {
    const wrap = document.getElementById("accordion");
    wrap.addEventListener("click", (e) => {
      const trigger = e.target.closest(".accordion__trigger");
      if (!trigger) return;
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.setAttribute("data-open", String(!isOpen));
    });
  },
};

const Carousel = {
  index: 0,

  init() {
    this.root = document.getElementById("carousel");
    this.track = document.getElementById("carouselTrack");
    this.dots = [...document.querySelectorAll(".carousel__dot")];
    this.status = document.getElementById("carouselStatus");
    this.total = DATA.dicas.length;

    document.getElementById("carouselPrev").addEventListener("click", () => this.go(this.index - 1));
    document.getElementById("carouselNext").addEventListener("click", () => this.go(this.index + 1));

    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => this.go(parseInt(dot.dataset.index, 10)));
    });

    this.root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") this.go(this.index + 1);
      if (e.key === "ArrowLeft") this.go(this.index - 1);
    });

    this.render();
  },

  go(newIndex) {
    this.index = (newIndex + this.total) % this.total;
    this.render();
  },

  render() {
    this.track.style.transform = `translateX(-${this.index * 100}%)`;
    this.dots.forEach((dot, i) => dot.setAttribute("aria-selected", String(i === this.index)));
    const titulo = DATA.dicas[this.index].titulo;
    this.status.textContent = `Dica ${this.index + 1} de ${this.total}: ${titulo}`;
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Render.all();
  A11y.init();
  ScrollReveal.init();
  DepthGauge.init();
  Accordion.init();
  Carousel.init();
});
