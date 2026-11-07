# Lucas Bebidas — Redesign de Marca e Experiência Digital

> **Projeto Conceitual Demonstrativo de Presença Digital & Branding**  
> **Localização:** Planaltina-DF — Setor Residencial Leste (Buritis I)  
> **Desenvolvido por:** Davi Anderson  
> **Identidade do Agente:** Antigravity (Advanced Branding, UI/UX & Web Engineering Specialist)

---

## 🌟 Visão Geral

Este projeto foi concebido como uma proposta profissional de agência para modernização da presença digital da **Lucas Bebidas**, comércio local de destaque localizado na Vila Buritis em Planaltina-DF.

A solução contempla:
1. **Redesign e Modernização da Logo Original:** Preservação integral dos elementos históricos e emocionais (a coroa real de 5 pontas, os ramos de louro dourados e a composição tipográfica "LUCAS Bebidas") com acabamento vetorial SVG puro, alta definição, kerning geométrico e suporte a múltiplos pontos de contato.
2. **Landing Page Institucional & Operacional:** Experiência digital rápida, responsiva, com tema escuro luxuoso (Preto Ônix e Ouro Nobre Metálico), verificação em tempo real do status de atendimento (aberto/fechado com fuso de Brasília), relógio digital, botões de contato direto para WhatsApp e discagem, e rota integrada no Google Maps e Waze.
3. **Brand Guide & Design System Interativo (`brand-guide.html`):** Página complementar com comparação antes & depois, todas as 6 variações vetoriais com download, paleta de cores com cópia em 1 clique e guia de boas práticas.
4. **Pronto para Hospedagem no GitHub Pages:** Código 100% estático (HTML5, CSS3, JavaScript Vanilla), sem dependência de servidores de backend ou ferramentas complexas de build.

---

## 📂 Estrutura de Arquivos

```
Lucas Bebidas/
├── index.html                   # Landing page institucional e operacional
├── brand-guide.html             # Guia interativo da nova identidade visual
├── .nojekyll                    # Impede que o GitHub Pages aplique processamento Jekyll
├── README.md                    # Documentação do projeto e instruções de publicação
└── assets/
    ├── css/
    │   ├── styles.css           # Estilos principais da landing page (design tokens, grid, responsividade)
    │   └── brand-guide.css      # Estilos do Brand Guide interativo
    ├── js/
    │   ├── main.js              # Lógica de status em tempo real, relógio, tabela de horários e clipboard
    │   └── brand-guide.js       # Interatividade de cópia de cores da paleta
    └── images/
        ├── original-logo.png    # Registro da logo original fornecida
        ├── logo-main.svg        # Logo Principal (Emblema modernizado)
        ├── logo-horizontal.svg  # Logo Horizontal (Header, banners e orçamentos)
        ├── logo-compact.svg     # Logo Compacta / Avatar (WhatsApp, Instagram, App)
        ├── logo-monochrome.svg  # Versão Monocromática Positiva (Preta - Carimbos e Recibos)
        ├── logo-white.svg       # Versão Monocromática Negativa (Branca - Bordados e Neon)
        ├── favicon.svg          # Favicon em SVG de alta nitidez para navegadores
        └── og-image.svg         # Imagem para compartilhamento social (WhatsApp / Telegram)
```

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

Como todo o código foi estruturado com caminhos relativos e tecnologia estática pura, você pode colocar o site no ar gratuitamente em menos de 2 minutos pelo **GitHub Pages**:

### Método 1: Pelo Terminal / Git

1. No terminal do projeto, inicialize o repositório git:
   ```bash
   git init
   git add .
   git commit -m "feat: lancamento do redesign e experiencia digital Lucas Bebidas"
   ```

2. Crie um repositório no seu GitHub (exemplo: `lucas-bebidas`).

3. Conecte o repositório remoto e envie os arquivos:
   ```bash
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/lucas-bebidas.git
   git push -u origin main
   ```

4. No GitHub, abra seu repositório:
   - Clique na aba **Settings** (Configurações).
   - No menu lateral esquerdo, clique em **Pages**.
   - Na seção **Branch**, selecione `main` e a pasta `/ (root)`.
   - Clique em **Save**.

5. Em poucos instantes, o site estará online no endereço:
   `https://SEU-USUARIO.github.io/lucas-bebidas/`

---

## 🕒 Inteligência de Horários (Brasília UTC-3)

O estabelecimento funciona diariamente (segunda a domingo) das **09:00 até as 02:00 da madrugada do dia seguinte**.
O script `assets/js/main.js` calcula automaticamente o fuso de Brasília:
- Se a hora atual em Brasília estiver entre **09h e 23h59** ou entre **00h e 01h59**: o sistema exibe o badge pulsante **🟢 Aberto agora • Fecha às 02h**.
- Se a hora atual estiver entre **02h e 08h59**: o sistema exibe **⚪ Fechado no momento • Abre às 09h**.
- A tabela de horários destaca com um selo dourado **"Hoje"** o dia da semana atual.

---

## ⚖️ Conformidade Legal e Publicitária (Seção 6)

Em estrita consonância com a legislação brasileira (ECA - Lei Federal nº 8.069/1990, Lei nº 13.106/2015 e Lei Seca nº 11.705/2008):
- Não há venda de álcool online ou catálogo de preços promocionais de bebidas.
- Inclusão visível de selo informativo `18+` e mensagem de consumo responsável ("Se beber, não dirija").
- Finalidade 100% institucional, operacional e de facilitação de contato direto do cliente com o estabelecimento físico.

---

## 📋 Nota de Transparência Obrigatória (Seção 9)

> *"Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa um sistema/site oficial da Lucas Bebidas."*
