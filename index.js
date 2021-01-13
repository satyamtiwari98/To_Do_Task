let x;
let x1;
let x2;
let button1;
let button2;
let i = 0;
let a = [];


$(document).ready(function () {

    $('#addTaskButton').click(function () {

        a[i] = $('#addTask').val();
        x1 = `<input type="checkbox" id="check${i}" class="boxcheck">`;
        x2 = `<input type="text" id="addTask${i}"  readonly>`;
        button1 = `<button id="edit${i}"  class="btn btn-success editbtn"> EDIT</button>`;
        button2 = `<button id="delete${i}"" class="btn btn-danger delbtn"> DELETE</button>`;
        $('#insertdata').append(`<div id=div${i}>` + x1 + `<span id="con${i}">` + a[i] + `</span>` + '<br>' + x2 + button1 + button2 + `</div>`);
        i++;
        $('#addTask').val("");

        $('.editbtn').off().click(function () {

            let idd = this.id;
            let x = $('#' + idd).text();
            x = x.trim(x);
            let cutid = idd.substring(4);

            if (x == "EDIT") {

                $(`#addTask${cutid}`).val(a[cutid]);
                $(`#edit${cutid}`).text("SAVE");
                $(`#addTask${cutid}`).attr('readonly', false);

            } else if (x == "SAVE") {

                a[cutid] = $(`#addTask${cutid}`).val();
                $(`#con${cutid}`).text(a[cutid]);
                $(`#edit${cutid}`).text("EDIT");
                $(`#addTask${cutid}`).val("");
                $(`#addTask${cutid}`).attr('readonly', true);

            }

        });


        $('.delbtn').off().click(function () {

            let idd = this.id;
            let cutid = idd.substring(6);
            $(`#div${cutid}`).remove();


        });

        $('.boxcheck').off().click(function () {

            let checkid = this.id;
            let cutid = checkid.substring(5);

            if ($(`#check${cutid}`).is(":checked")) {

                let myDiv1Para = $(`#div${cutid}`);
                myDiv1Para.appendTo('#movedata');
                $(`#addTask${cutid}`).val("");
                $(`#edit${cutid}`).text("EDIT");

            } else {

                let myDiv1Para = $(`#div${cutid}`);
                myDiv1Para.appendTo('#insertdata');
                $(`#addtask${cutid}`).val("");
                $(`#edit${cutid}`).text("EDIT");

            }

        });

    });

});





