import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['モルヒネ'],
      explanation: 'ケシの花から抽出された成分。麻薬物質',
    },
    {
      term: ['アスピリン', 'アセチルサリチル酸'],
      explanation:
        '柳の抽出物が炎症に有効である。柳から抗炎症作用をもたらす物質サリシンが生成され、生体でサリチル酸となり効力を発揮することが明らかにされた。後にドイツのバイエル社が副作用を改善し、アセチルサリチル酸として1899年に商標登録された。',
    },
    {
      term: ['サルファ剤', 'プロントジル'],
      explanation:
        '1935年にプロントジルに抗菌作用があることを発見された。プロントジルは生体内でスルファルアミドとなり抗菌作用を発揮する。',
    },
    {
      term: ['ペニシリン'],
      explanation:
        '1940年に発見された抗生物質。医薬品開発の歴史において画期的な発見であった。',
    },
    {
      term: ['心拍数', '徐脈', '頻脈'],
      explanation:
        '40~50で徐脈、100以上で頻脈。徐脈の場合はペースメーカー、頻脈の場合はβ-blockerやCa拮抗薬が治療として用いられる。',
    },
    {
      term: ['statin'],
      explanation:
        'コレステロール血症を治療する薬は語尾が国際一般名INNではstatinとなっている。',
    },
    {
      term: ['国際一般名', 'International Nonproprietary Name', 'INN'],
      explanation:
        '語尾から作用機序がわかるようにしてある。発売会社によって付けられる商品名は国によって異なることが多い。',
    },
    {
      term: ['坐剤'],
      explanation: '肝臓での初回通過効果を受けない方法。',
    },
    {
      term: ['～薬と～剤の違い'],
      explanation:
        '化学物質そのものを～薬と呼び、それに薬剤的な加工をしてあるものを～剤と呼ぶ。',
    },
    {
      term: ['副作用', 'side effect'],
      explanation:
        '治療上不必要になる作用または障害となる作用のうち、薬との因果関係がはっきり証明された有害反応。これまでは望ましくない作用を全て副作用と称していたが、最近は有害反応や、非利益な反応、望ましくない反応等とよび、副作用と区別して用いる。',
    },
    {
      term: ['抗ヒスタミン剤', '睡眠導入薬', 'ドリエル'],
      explanation:
        '多くの花粉症の薬は、H1-blockerと呼ばれているが、副作用として眠気が確認されている。眠気の副作用を逆手にとって、睡眠導入薬として販売されている。',
    },
    {
      term: ['プラセボ効果', 'placebo', '偽薬'],
      explanation:
        '実物と全く同じに見せかけた偽物の薬。医薬品の臨床試験で、プラセボ対照試験が行われ、薬効が調べられる。真の薬効 + プラセボ効果 = 臨床効果。特に中枢神経系に作用する薬には、プラセボ効果が高いといわれている。',
    },
    {
      term: ['原因療法薬'],
      explanation:
        '薬が直接的に病気の原因を除く。このタイプの薬は少ない。抗生物質・結核治療薬・抗ウイルス薬など。',
    },
    {
      term: ['対症療法薬'],
      explanation:
        '薬が病気の症状・危険因子を除く（予防薬も含まれる）。多くの薬は原因療法薬（抗生物質・結核治療薬・抗ウイルス薬など）ではなく対症療法薬に分類される。',
    },

    {
      term: ['薬理学', 'pharmacology'],
      explanation:
        '薬理学とは、薬と生体との相互作用の結果起こる現象を研究する科学であると定義されよう。薬の多くは生体に作用して、生体の調節機構を揺り動かすことによって、乱れている調節機構を正常方向に動かすことを可能にしている。',
    },
    {
      term: ['薬力学', 'pharmaco dynamics'],
      explanation: '薬がどのように効くのかを研究する学問',
    },
    {
      term: ['薬物動態学', 'pharmaco kinetics'],
      explanation: '薬の吸収・分布・代謝・排泄などを研究する学問→ADMS？。',
    },
    {
      term: ['直接効果', 'direct effect'],
      explanation:
        '薬物がその作用部位に結合して細胞機能を変化させた結果、その細胞に生じる効果のことをいう。',
    },
    {
      term: ['間接効果', 'indirect effect'],
      explanation:
        '直接効果の結果生体の機能が変化し、そのために新たに生じてくる効果をいう。',
    },
    {
      term: ['特異性', 'specificity'],
      explanation:
        '特異性とは、特有の受容体や細胞機能のみに作用して他のものには作用しないことをいう。高い選択性の慣用として「特異性」という言葉が許容されている。',
    },
    {
      term: ['選択性', 'selectivity'],
      explanation:
        'ある限られた濃度範囲において、他の機構に影響せずに特有の受容体や細胞機能にだけ作用するが、さらに高い濃度を用いれば他にも作用しうることをいう。',
    },
    {
      term: ['アゴニスト', 'agonist'],
      explanation: '作動薬',
    },
    {
      term: ['アンタゴニスト', 'antagonist'],
      explanation: '拮抗薬',
    },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
  ])
  const showTechnicalTerm = () => {
    return technicalTerm.filter(
      (value) => value.term && value.term !== [] && value.term !== [''],
    )
  }
  return {
    showTechnicalTerm,
  }
}
