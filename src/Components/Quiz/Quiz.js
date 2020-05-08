import React, { Component } from "react";
import "./Quiz.css";
import Itens from "./Itens";
import $ from "jquery";
var maxi = 1;
var actv = [];
var eendex = [];

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eendex: ["ola"],
    };
    this.prox = this.prox.bind(this);
  }
  antes() {
    if ($(".botPrev").hasClass("activ1")) {
      maxi = 5;
      $(".botProx").addClass("activ1");
      $(".botPrev").removeClass("activ1");
      $(".pagii2")
        .fadeTo(2000, 0)
        .hide(0, () => {
          $(".pagii1").show(0).fadeTo(2000, 1);
        });
    } else if ($(".botPrev").hasClass("activ2")) {
      maxi = 5;
      $(".botPrev").removeClass("activ2");
      $(".botPrev").addClass("activ1");
      $(".botProx").removeClass("activ2");
      $(".botProx").addClass("activ2");
      $(".pagii3")
        .fadeTo(2000, 0)
        .hide(0, () => {
          $(".pagii2").show(0).fadeTo(2000, 1);
        });
    }
  }

  prox() {
    if ($(".botProx").hasClass("activ1")) {
      $(".botProx").removeClass("activ1");
      $(".botPrev").addClass("activ1");
      $(".pagii1")
        .fadeTo(2000, 0)
        .hide(0, () => {
          $(".pagii2").show(0).fadeTo(2000, 1);
        });
      if (actv.length === 4) {
        maxi = 1;
      }
    } else if ($(".botProx").hasClass("activ2")) {
      $(".botProx").removeClass("activ2");
      $(".botPrev").removeClass("activ1");
      $(".botPrev").addClass("activ2");
      $(".pagii2")
        .fadeTo(2000, 0)
        .hide(0, () => {
          $(".pagii3").show(0).fadeTo(2000, 1);
          console.log(actv);
        });
      if (actv.length === 8) {
        maxi = 1;
      }
    } else if ($(".botProx").hasClass("activ3")) {
      $(".botProx").removeClass("activ3");
      var cool = actv.filter(function (act) {
        return act.type === "cool";
      });
      var cont = actv.filter(function (act) {
        return act.type === "cont";
      });
      var clean = actv.filter(function (act) {
        return act.type === "clean";
      });
      var indust = actv.filter(function (act) {
        return act.type === "indust";
      });
      eendex = [cool.length, cont.length, clean.length, indust.length];
      var maxe = eendex[0];
      var maxeIndex = 0;
      console.log(maxe);
      for (var i = 1; i < eendex.length; i++) {
        if (eendex[i] > maxe) {
          maxeIndex = i;
          maxe = eendex[i];
        }
      }
      console.log(maxe);
      console.log(maxeIndex);
      switch (maxeIndex) {
        case 0:
          $("#tit").text("Seu estilo é cool");
          break;
        case 1:
          $("#tit").text("Seu estilo é contemporâneo");
          break;
        case 2:
          $("#tit").text("Seu estilo é clean");
          break;
        case 3:
          $("#tit").text("Seu estilo é industrial");
          break;
      }
      $(".apagar")
        .fadeTo(2000, 0)
        .hide(0, () => {
          $(".fim").show(0).fadeTo(2000, 1);
        });
    }
  }
  //  ---------------------------------------------------------------------------
  click(event) {
    var target = event.target;

    if (maxi === 5) {
      if ($(target).hasClass("active")) {
        $(target).removeClass("active").css("border", "none");
        $(`.${target.id}`).hide(0);
        maxi--;
        actv = actv.filter(function (act) {
          return act.id !== target.id;
        });
      }
    } else {
      if (!$(target).hasClass("active")) {
        $(target).addClass("active").css("border", "4px ridge #e85d87");
        $(`.${target.id}`).removeAttr("hidden").show();
        maxi++;
        actv.push({
          id: target.id,
          type: $(target).attr("value"),
        });
        console.log(actv);
      } else {
        $(target).removeClass("active").css("border", "none");
        $(`.${target.id}`).hide(0);
        maxi--;
        actv = actv.filter(function (act) {
          return act.id !== target.id;
        });
        console.log(actv);
      }
    }
    if (maxi === 5) {
      $(".botProx").addClass("activ1");
    } else {
      $(".botProx").removeClass("activ1");
    }
  }
  // clickProx(){
  //     if(actv.length===4){
  //        var cool =  actv.filter(function(act) {
  //             return act.type === 'cool';
  //         });
  //         var cont =  actv.filter(function(act) {
  //             return act.type === 'cont';
  //         });
  //         var clean =  actv.filter(function(act) {
  //             return act.type === 'clean';
  //         });
  //         var indust =  actv.filter(function(act) {
  //             return act.type === 'indust';
  //         });
  //        console.log("cool:"+cool.length)
  //        console.log("cont:"+cont.length)
  //        console.log("clean:"+clean.length)
  //        console.log("indust:"+indust.length)
  //         eendex = [cool.length, cont.length, clean.length, indust.length]
  //         console.log(eendex)
  //         maxi=1
  //    var maxe=eendex[0]
  //    var maxeIndex=0
  //      for(var i=1; i<eendex.length; i++){
  //        if(eendex[i]>maxe){
  //         maxeIndex=i;
  //         maxe = eendex[i]
  //        }
  //    }
  //    console.log(maxeIndex)
  //    switch (maxeIndex){
  //        case 0:
  //            $('#tit').text('Seu estilo é cool')
  //             break;
  //         case 1:
  //             $('#tit').text('Seu estilo é contemporâneo')
  //             break;
  //         case 2:
  //             $('#tit').text('Seu estilo é clean')
  //             break;
  //         case 3:
  //             $('#tit').text('Seu estilo é industrial')
  //             break;

  //    }
  //     }
  // }
  //  ----------------------------------------------------------------------------------------------------
  click2(event) {
    var target = event.target;

    if (maxi === 5) {
      if ($(target).hasClass("active")) {
        $(target).removeClass("active").css("border", "none");
        $(`.${target.id}`).hide(0);
        maxi--;
        actv = actv.filter(function (act) {
          return act.id !== target.id;
        });
      }
    } else {
      if (!$(target).hasClass("active")) {
        $(target).addClass("active").css("border", "4px ridge #e85d87");
        $(`.${target.id}`).removeAttr("hidden").show();
        maxi++;
        actv.push({
          id: target.id,
          type: $(target).attr("value"),
        });
        console.log(actv);
      } else {
        $(target).removeClass("active").css("border", "none");
        $(`.${target.id}`).hide(0);
        maxi--;
        actv = actv.filter(function (act) {
          return act.id !== target.id;
        });
        console.log(actv);
      }
    }
    if (maxi === 5) {
      $(".botProx").addClass("activ2");
    } else {
      $(".botProx").removeClass("activ2");
    }
  }
  // -----------------------------------------------------------------------------------------
  click3(event) {
    var target = event.target;

    if (maxi === 5) {
      if ($(target).hasClass("active")) {
        $(target).removeClass("active").css("border", "none");
        $(`.${target.id}`).hide(0);
        maxi--;
        actv = actv.filter(function (act) {
          return act.id !== target.id;
        });
      }
    } else {
      if (!$(target).hasClass("active")) {
        $(target).addClass("active").css("border", "4px ridge #e85d87");
        $(`.${target.id}`).removeAttr("hidden").show();
        maxi++;
        actv.push({
          id: target.id,
          type: $(target).attr("value"),
        });
        console.log(actv);
      } else {
        $(target).removeClass("active").css("border", "none");
        $(`.${target.id}`).hide(0);
        maxi--;
        actv = actv.filter(function (act) {
          return act.id !== target.id;
        });
        console.log(actv);
      }
    }
    if (maxi === 5) {
      $(".botProx").addClass("activ3");
    } else {
      $(".botProx").removeClass("activ3");
    }
  }
  // ------------------------------------------------------------------------------
  render() {
    return (
      <div className="tudo row align-items-center justify-content-center">
        <div className="apagar  row align-items-center justify-content-center">
          <div className="col-3 col-lg-2 text-center coli1">
            <button
              onClick={this.antes}
              className="botPrev botPrev1"
              style={{
                border: "1px solid black",
                color: "black",
                backgroundColor: "white",
              }}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          <div className='class="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-5 frame card"'>
            <div className="card-header cd row align-items-center justify-content-center">
              <div className="col text-center">
                <img
                  className="img-fluid "
                  src="./media/logoarq2.png"
                  style={{ border: "none", maxWidth: "150px" }}
                />
                <h1>Qual seu estilo?</h1>
                <h6> (Escolha quatro opções)</h6>
              </div>
            </div>
            <div
              className="row align-items-center justify-content-center bodie"
              style={{ margin: "20px 0px" }}
            >
              <div className="col-lg-11">
                {/* ----------------------------------------------------------------------------------------------------                             */}
                <div className="pagii1 row align-items-center justify-content-between">
                  <div className="col-4 cul">
                    <div style={{ position: "relative" }}>
                      <img
                        className={`img-fluid imagem`}
                        onClick={this.click}
                        id={Itens[0].id}
                        value={Itens[0].type}
                        src={Itens[0].src}
                      />
                      <img
                        className="img-fluid imagem cora 1"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click}
                        id={Itens[1].id}
                        value={Itens[1].type}
                        src={Itens[1].src}
                      />
                      <img
                        className="img-fluid imagem cora 2"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click}
                        id={Itens[2].id}
                        value={Itens[2].type}
                        src={Itens[2].src}
                      />
                      <img
                        className="img-fluid imagem cora 3"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                  </div>
                  <div className="col-4 cul">
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click}
                        id={Itens[3].id}
                        value={Itens[3].type}
                        src={Itens[3].src}
                      />
                      <img
                        className="img-fluid imagem cora 4"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click}
                        id={Itens[4].id}
                        value={Itens[4].type}
                        src={Itens[4].src}
                      />
                      <img
                        className="img-fluid imagem cora 5"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click}
                        id={Itens[5].id}
                        value={Itens[5].type}
                        src={Itens[5].src}
                      />
                      <img
                        className="img-fluid imagem cora 6"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                  </div>
                  <div className="col-4 cul">
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click}
                        id={Itens[6].id}
                        value={Itens[6].type}
                        src={Itens[6].src}
                      />
                      <img
                        className="img-fluid imagem cora 7"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click}
                        id={Itens[7].id}
                        value={Itens[7].type}
                        src={Itens[7].src}
                      />
                      <img
                        className="img-fluid imagem cora 8"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click}
                        id={Itens[8].id}
                        value={Itens[8].type}
                        src={Itens[8].src}
                      />
                      <img
                        className="img-fluid imagem cora 9"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------------------------------------------------------------------------------------------------- */}

                <div
                  className="pagii2 row align-items-center justify-content-between"
                  style={{ display: "none", opacity: 0 }}
                >
                  <div className="col-4 cul">
                    <div style={{ position: "relative" }}>
                      <img
                        className={`img-fluid imagem`}
                        onClick={this.click2}
                        id={Itens[9].id}
                        value={Itens[9].type}
                        src={Itens[9].src}
                      />
                      <img
                        className="img-fluid imagem cora 10"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click2}
                        id={Itens[10].id}
                        value={Itens[10].type}
                        src={Itens[10].src}
                      />
                      <img
                        className="img-fluid imagem cora 11"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click2}
                        id={Itens[11].id}
                        value={Itens[11].type}
                        src={Itens[11].src}
                      />
                      <img
                        className="img-fluid imagem cora 12"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                  </div>
                  <div className="col-4 cul">
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click2}
                        id={Itens[12].id}
                        value={Itens[12].type}
                        src={Itens[12].src}
                      />
                      <img
                        className="img-fluid imagem cora 13"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click2}
                        id={Itens[13].id}
                        value={Itens[13].type}
                        src={Itens[13].src}
                      />
                      <img
                        className="img-fluid imagem cora 14"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click2}
                        id={Itens[14].id}
                        value={Itens[14].type}
                        src={Itens[14].src}
                      />
                      <img
                        className="img-fluid imagem cora 15"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                  </div>
                  <div className="col-4 cul">
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click2}
                        id={Itens[15].id}
                        value={Itens[15].type}
                        src={Itens[15].src}
                      />
                      <img
                        className="img-fluid imagem cora 16"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click2}
                        id={Itens[16].id}
                        value={Itens[16].type}
                        src={Itens[16].src}
                      />
                      <img
                        className="img-fluid imagem cora 17"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click2}
                        id={Itens[17].id}
                        value={Itens[17].type}
                        src={Itens[17].src}
                      />
                      <img
                        className="img-fluid imagem cora 18"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                  </div>
                </div>
                {/* --------------------------------------------------------------------------------------------------------------------------------------                         */}
                <div
                  className="pagii3 row align-items-center justify-content-between"
                  style={{ display: "none", opacity: 0 }}
                >
                  <div className="col-4 cul">
                    <div style={{ position: "relative" }}>
                      <img
                        className={`img-fluid imagem`}
                        onClick={this.click3}
                        id={Itens[18].id}
                        value={Itens[18].type}
                        src={Itens[18].src}
                      />
                      <img
                        className="img-fluid imagem cora 19"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click3}
                        id={Itens[19].id}
                        value={Itens[19].type}
                        src={Itens[19].src}
                      />
                      <img
                        className="img-fluid imagem cora 20"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click3}
                        id={Itens[20].id}
                        value={Itens[20].type}
                        src={Itens[20].src}
                      />
                      <img
                        className="img-fluid imagem cora 21"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                  </div>
                  <div className="col-4 cul">
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click3}
                        id={Itens[21].id}
                        value={Itens[21].type}
                        src={Itens[21].src}
                      />
                      <img
                        className="img-fluid imagem cora 22"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click3}
                        id={Itens[22].id}
                        value={Itens[22].type}
                        src={Itens[22].src}
                      />
                      <img
                        className="img-fluid imagem cora 23"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click3}
                        id={Itens[23].id}
                        value={Itens[23].type}
                        src={Itens[23].src}
                      />
                      <img
                        className="img-fluid imagem cora 24"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                  </div>
                  <div className="col-4 cul">
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click3}
                        id={Itens[24].id}
                        value={Itens[24].type}
                        src={Itens[24].src}
                      />
                      <img
                        className="img-fluid imagem cora 25"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click3}
                        id={Itens[25].id}
                        value={Itens[25].type}
                        src={Itens[25].src}
                      />
                      <img
                        className="img-fluid imagem cora 26"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                    <div style={{ position: "relative" }}>
                      <img
                        className="img-fluid imagem"
                        onClick={this.click3}
                        id={Itens[26].id}
                        value={Itens[26].type}
                        src={Itens[26].src}
                      />
                      <img
                        className="img-fluid imagem cora 27"
                        src="../media/coracao.png"
                        hidden
                      />
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------------------------------------------------------------------------------------------------------------                         */}
              </div>
            </div>
          </div>
          <div
            className="col-3 col-lg-2 text-center coli2"
            style={{ display: "none", padding: `10px` }}
          >
            <button onClick={this.antes} className="botPrev botPrev2 ">
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          <div className="col-3 col-lg-2 text-center">
            <button className="botProx" onClick={this.prox}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div
          className="col-10 col-sm-10 col-md-10 col-lg-5 text-center fim"
          style={{ position: "relative", display: "none" }}
        >
          <div className="col text-center">
            <img
              className="img-fluid "
              src="./media/logoarq2.png"
              style={{ border: "none", maxWidth: "150px" }}
            />
            <img
              className="img-fluid "
              src="../media/coracao.png"
              style={{ border: "none", maxWidth: "45px" }}
            />
            <h1 id="tit">Seu estilo eh</h1>
            <h6>
              {" "}
              Agora que conhece seu estilo, venha aplicá-lo em seu ambiente!
            </h6>
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-4 col-lg-6 col-xl-5 text-right">
                <a
                  href="https://www.arqexpress.com.br/servicos"
                  target="_blank"
                >
                  <button
                    className="btn btn-danger bote"
                    style={{ margin: `10px`, width: "-webkit-fill-available" }}
                  >
                    Quero conhecer a ArqExpress!
                  </button>
                </a>
              </div>
              <div className="class=col-12 col-md-4 col-lg-6 col-xl-5 text-left">
                <a
                  href="https://www.arqexpress.com.br/orcamento"
                  target="_blank"
                >
                  <button
                    className="btn btn-danger bote"
                    style={{ margin: `10px`, width: "-webkit-fill-available" }}
                  >
                    Quero fazer um projeto!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// , display: 'none'
