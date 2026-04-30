# 🐝 Capacidade Apícola — Caatinga

Calculadora de capacidade apícola sustentável baseada no **modelo EMBRAPA**, adaptada para o bioma Caatinga e região do Auto-Oeste Potiguar.

O aplicativo calcula quantas colônias de *Apis mellifera* um apiário pode suportar de forma sustentável, com base em parâmetros técnicos como cobertura vegetal, flora apícola disponível e sazonalidade de floração.

---

## 📋 Funcionalidades

### Cadastro e Localização
- Cadastro completo do apicultor, apiário e propriedade
- Mapa interativo com captura de GPS do dispositivo
- Marcação do apiário com círculo de raio de forrageamento (1,5 km, 2 km ou 3 km)
- Alternância entre mapa padrão (OpenStreetMap) e satélite (ArcGIS)
- Inserção manual de coordenadas (latitude/longitude)

### Análise Técnica
- Ajuste percentual de cobertura vegetal (Caatinga Preservada, Capoeira, Agricultura, Pastagem)
- Base de dados com **45 espécies apícolas da Caatinga** com Índice de Aptidão Ecológica (IAE 1–5)
- Busca e filtro de espécies por nome comum ou científico
- Seleção de meses com floração significativa (Fator de Sazonalidade)
- Cálculo automático da capacidade máxima de colônias (NC)
- Faixa operacional recomendada (70%–85% da capacidade máxima)
- Classificação da área (Excelente, Boa, Moderada, Baixa, Muito Baixa)
- Diagnóstico técnico com sugestões de manejo personalizadas

### Resultados e Exportação
- Gauge circular animado com densidade de colônias
- Métricas: ICA, Faixa Operacional, Produção estimada, Área útil
- Tabela completa de parâmetros técnicos
- Exportação via **WhatsApp** (relatório textual formatado)
- Exportação em **PDF** (com mapa, dados, parâmetros e diagnóstico)

---

## 🔧 Modelo de Cálculo (EMBRAPA)

| Parâmetro | Fórmula | Descrição |
|---|---|---|
| **AU** | π × raio² × 100 | Área Útil em hectares |
| **CV** | Preservada + Capoeira + Agricultura | Cobertura Vegetal apícola (%) |
| **IAE** | Média dos IAEs das espécies | Índice de Aptidão Ecológica (1–5) |
| **SF** | Meses com floração / 12 | Fator de Sazonalidade (0–1) |
| **ICA** | (AU × CV × IAE × SF) / 100 | Índice de Capacidade Apícola |
| **NC** | ⌊ ICA / 8 ⌋ | Número máximo de colônias |
| **Faixa** | NC × [70% – 85%] | Faixa operacional recomendada |
| **Produção** | Colônias × 25 kg/ano | Produção estimada de mel |

---

## 🚀 Como Usar

### Online
Acesse diretamente pelo navegador:

