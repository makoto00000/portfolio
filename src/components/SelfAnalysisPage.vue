<template lang="">
  <div class="container">
    <h2>Self Analysis</h2>
    <SelfAnalysisModal :analyses = "analyses"/>
    </div>
</template>

<script>
import SelfAnalysisModal from './SelfAnalysisModal.vue';
export default {
  name: "SelfAnalysisPage",
  components: {
    SelfAnalysisModal,
  },
  data() {
    return {
      analyses: [
        {title: "空気を読むのが得意",
        content: "小さい頃はとにかく目立ちたくなかったので、いかに周りに溶け込めるかということばかり考えていました。\nそのためには場の空気を読むというスキルが必須であり、そのおかげというべきか、うまく周りに溶け込むことが得意になりました。",
        image: require("../assets/img/SAPageImg/redd-f-5U_28ojjgms.jpg"),
        className:"open analysis word1",
        },
        
        {title: "プログラミングには勉強熱心",
        content: "プログラミングは、勉強すればするほどできることが増えていくのが楽しく、挫折を経験したことがありません。様々な言語や技術の習得のため日々情報収集や、開発に勤しんでいます。",
        image: require("../assets/img/SAPageImg/danial-igdery-FCHlYvR5gJI.jpg"),
        className:"open analysis word2",
        },
        
        {title: "効率厨",
        content: "日頃からどうすればもっと効率よくなるのかを考えています。プログラミングはそんな私にとって非常に相性の良いツールとなってくれました。また無駄を省いた業務改善も得意としています。",
        image: require("../assets/img/SAPageImg/jason-strull-KQ0C6WtEGl.jpg"),
        className:"open analysis word3",
        },
        {title: "新しいもの好き",
        content: "新しい家電、新しいガジェット、新しいソフトなど、「新しい」ものは大好きです。また最新技術や、自分が知らない技術を知ると、すぐに使ってみたくなります。IT業界は常に最新のトレンドが変化していくため、こういった性格であることは大きなメリットであると考えます。",
        image: require("../assets/img/SAPageImg/coding-3013602_1280.jpg"),
        className:"open analysis word4",
        },
        {title: "要点を掴む",
        content: "相手の主張を要約したり、第３者に分かりやすく噛み砕いて説明するのが得意です。専門的な内容でも、別のものに例えながら伝えることができます。",
        image: require("../assets/img/SAPageImg/hand-325321_1280.jpg"),
        className:"open analysis word5",
        },
        {title: "暗記ではなく理解",
        content: "暗記が苦手というのもありますが... 例えば数学の公式は丸暗記するのではなく、なぜその公式で答えが求められるのかというところまで理解することで、覚えるようにしています。",
        image: require("../assets/img/SAPageImg/board-2853022_1280.jpg"),
        className:"open analysis word6",
        },
        {title: "第三者視点",
        content: "ものごとを俯瞰で考えるのが得意です。開発者視点だけでなく、ユーザー視点、運営視点でも考え、最適なものづくりを目指します。",
        image: require("../assets/img/SAPageImg/noah-silliman-gzhyKEo_cbU-unsplash.jpg"),
        className:"open analysis word7",
        },
        {title: "聞き役",
        content: "話をするよりは、話を聞く方が得意です。潜在的なニーズを引き出し、本当にやりたいこと、作りたいものをカタチにします。",
        image: require("../assets/img/SAPageImg/meeting-594091_1280.jpg"),
        className:"open analysis word8",
        },
      ],
    }
  },

}
</script>
<style scoped>
  h2 {
    border-bottom: 0.5vw solid;
    margin: 0 5vw;
    padding-bottom: 2vw;
    margin-bottom: 5vw;
    text-align: left;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: calc(100vw * 9/16);
  }
</style>