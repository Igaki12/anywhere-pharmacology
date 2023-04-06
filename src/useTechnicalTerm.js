import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['モルヒネ'],
      explanation: 'ケシの花から抽出された成分。麻薬物質',
    },
    {
      term: ['アスピリン'],
      explanation:
        '柳の抽出物が炎症に有効である。柳から抗炎症作用をもたらす物質サリシンが生成され、生体でサリチル酸となり効力を発揮することが明らかにされた。後にドイツのバイエル社が副作用を改善し、アセチルサリチル酸として1899年に商標登録された。',
    },
    {
      term: ['サルファ剤'],
      explanation:
        '1935年にプロントジルに抗菌作用があることを発見された。プロントジルは生体内でスルファルアミドとなり抗菌作用を発揮する。',
    },
    {
      term: ['ペニシリン'],
      explanation:
        '1940年に発見された抗生物質。医薬品開発の歴史において画期的な発見であった。',
    },
    {
      term: ['心拍数'],
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
