// $(document).on('turbolinks:load', function(){

// // 画像保存データがある場合の処理（商品編集画面で新規登録と同じ使用感での画像表示する処理）
//   // imgオブジェクトの個数をimageLengthに指定
//   let imageLength = $(".editimage").find("img").length;

//   // 以下で全ての既存画像に保存順にlabelLengthに名前をつけながらプレビュー表示する（.eachだと一括表示されているものは同じ番号としてlabelLengthに変化をつけられないのでfor文を使用）
//   for (let i = 0; i < $(".editimage").find("img").length; i++) {
//   let labelLength = gon.imageids[i];
//   console.log(labelLength)
//   // 表示用のクラスの子要素のimgオブジェクトの中のsrcを取得(.attr('img')だとsrcとカスタムデータの２属性をもつオブジェクトになってしまい取得後の再表示が上手くいかない)
//   let img = $('#img-'+ gon.imageids[i]).children('img').attr('src');
//   console.log(img)
// // プレビュー表示（最初に定義した変数imgでsrcを再表示させます）
// $('#image-input').before(`<li class="preview-image" id="upload-image${labelLength}" data-image-id="${labelLength}">
//                             <figure class="preview-image__figure">
//                             <img src='${img}' >
//                             </figure>
//                             <div class="preview-image__button">
//                               <a class="preview-image__button__edit" href="">編集</a>
//                               <a class="preview-image__button__delete" data-image-id="${labelLength}">削除</a>
//                             </div>
//                           </li>`);
//                           $("#image-input>label").eq(-1).css('display','none');
              
// if (imageLength < 10) {
//   // 表示されているプレビューが９以下なら、新たにinputを生成する
//   $("#image-input").append(`<label for="item_images${labelLength+1}" class="sell-container__content__upload__items__box__label" data-label-id="${labelLength+1}">
//                               <input multiple="multiple" class="sell-container__content__upload__items__box__input" id="item_images${labelLength+1}" style="display: none;" type="file" name="item[images][]">
//                               <i class="fas fa-camera fa-lg"></i>
//                             </label>`);
//   };
// };

// //画像の削除ボタンが押された時
// $(document).on('click', '.preview-image__button__delete', function(){
//   // イベント元のカスタムデータ属性の値を取得
//   let targetImageId = $(this).data('image-id');
//   console.log(targetImageId)
//   //削除ボタンを押された画像idをvalue（投げ入れる値）でhtmlにhidden状態で保存
//   let delete_input = `<input type="hidden" value="${targetImageId}" name="item[delete_image_ids][]">`
//   $(".sell-container__content__upload__items__box").append(delete_input);
// });  

// // カテゴリーボックスにデータがある場合の記述
// // カテゴリーセレクトボックスのオプション(親要素の選択肢)を作成
// function categoryOption(category){
//   var optionHtml = `<option value="${category.id}">${category.name}</option>`;
//   return optionHtml;
// }

//   //カテゴリ欄の親子孫の現在のカテゴリー名を取得
//   let parentid = $(".edit_parent_sell-collection_select__input").children("a").attr("id");
//   let parentCategoryName = $(".edit_parent_sell-collection_select__input").children("a").attr("data-parentname");
//   let childid = $(".edit_child_sell-collection_select__input").children("a").attr("id");
//   let childrenCategoryName = $(".edit_child_sell-collection_select__input").children("a").attr("data-childname");
//   let grandchildid = $(".edit_grandchild_sell-collection_select__input").children("a").attr("id");
//   let grandchildrenCategoryName = $(".edit_grandchild_sell-collection_select__input").children("a").attr("data-grandchildname");

//   //Ajax用の変数準備
//   let parentCategoryId = parentid;
//   let childrenCategoryId = childid;
//   let grandchildrenCategoryId = grandchildid ;
  
//   //親要素で選択されているものを表示
//   $('#category-select-parent').val(parentid);

// //子カテゴリーボックス作成
//   //ansestryより全親要素の呼び出ししたものをitems#newと連結
//   $.ajax({
//     url: '/items/category_children',
//     type: 'GET',
//     data: { parent_id: parentCategoryId },
//     dataType: 'json'
//   })
  
//   //呼び出したデータを使ってoption要素(プルダウンの要素)を作成する
//   .done(function(category_children){ 
//     let optionHtml = '';
//     category_children.forEach(function(child){
//       optionHtml += categoryOption(child);
//     });
//     $('#error-category').before(`<div class="sell-collection_select " id="select-children-box">
//                                     <label class="sell-collection_select__label" for="item_category_id">
//                                       <select class="sell-collection_select__input" id="category-select-children" required="required" name="item[category_id]">
//                                         <option value="${childid}">${childrenCategoryName}</option>
//                                         ${optionHtml}
//                                       </select>
//                                       <i class="fas fa-chevron-down"></i>
//                                     </label>
//                                   </div>`
//     );

// //孫カテゴリーボックス作成
//   //ansestryより全孫要素の呼び出し
//   $.ajax({
//       url: '/items/category_grandchildren',
//       type: 'GET',
//       data: { child_id: childrenCategoryId },
//       dataType: 'json'
//     })

//   //呼び出したデータを使ってoption要素(プルダウンの要素)を作成する
//   .done(function(category_grandchildren){
//       let optionHtml = '';
//       category_grandchildren.forEach(function(grandchildren){
//         optionHtml += categoryOption(grandchildren);
//     });
//     $('#error-category').before(`<div class="sell-collection_select " id="select-grandchildren-box">
//                                     <label class="sell-collection_select__label" for="item_category_id">
//                                       <select class="sell-collection_select__input" id="category-select-grandchildren" required="required" name="item[category_id]">
//                                         <option value="${grandchildid}">${grandchildrenCategoryName}</option>
//                                         ${optionHtml}
//                                       </select>
//                                       <i class="fas fa-chevron-down"></i>
//                                     </label>
//                                   </div>`
//                                 );
//                               })

// //エラーハンドリング
// .fail(function(){
//     alert('カテゴリー取得に失敗しました');
//   });
// });


// //販売価格
//   var price = $('.sell-container__content__price__form__label').children('a').attr('id');
//   $("#item_price").val(price);
//   //文字列にしないようにvalのなかをクォーテーションで囲まない


//   //消費税計算
//   if (price >= 300 && price <= 9999999){
//     let fee = Math.floor(price * 0.1);
//     // 小数点以下切り捨て
//     let profit = (price - fee);
//     $('.sell-container__content__commission__right').text('¥'+fee.toLocaleString());
//     // 対象要素の文字列書き換える
//     $('.sell-container__content__profit__right').text('¥'+profit.toLocaleString());
//   } else{
//     $('.sell-container__content__commission__right').html('ー');
//     $('.sell-container__content__profit__right').html('ー');
//   }


// f.text_areaの文字数カウント
// let txtcount = $("textarea").val().length;
// $("#word-count").text(txtcount);

// });
