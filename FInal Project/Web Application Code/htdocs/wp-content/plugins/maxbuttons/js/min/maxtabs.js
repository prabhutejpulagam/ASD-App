jQuery(document).ready(function(a){var e=function(){};e.prototype.init=function(){this.tabs(),this.previewTab()},e.prototype.tabs=function(){var e=".sub-tabs",t=".mb_tab",i="#maxbuttons";if(0!==a(t).length){var o=a(i).data("view");if("undefined"==typeof o&&(o="list"),"list"!=o){a(i).addClass("mb_tabs_active"),0===a(e).length?($tabslocation=a('<h2 class="nav-tab-wrapper sub-tabs"></h2>'),$tabslocation.insertBefore(a(t).first()),$tabslocation=a(e)):$tabslocation=a(e),a(t).hide(),a.each(a(t),function(){var t=a(this).children("div.title").first(),i=t.clone(),o=i.children("span:first").clone().wrap("<p>").parent().html(),s=i.children("span.title").text();a(i).children("span").remove(),a(i).children("input,button").remove(),t.children("span:first").remove(),t.children(".title").remove(),tab_title="undefined"!=typeof o?o+s:s;var n=a('<a class="nav-tab" href="javascript:void(0);">'+tab_title+"</a>");s=s.trim(),s=s.replace(/ /g,"-"),a(n).attr("data-tab",s.toLowerCase()),a(e).append(n),a(this).attr("data-tab",s.toLowerCase())});var s=a('input[name="tab"]').val();"undefined"==typeof s&&(s=""),""==s?($tabslocation.children(".nav-tab").first().addClass("nav-tab-active"),a(t).first().show()):($tabslocation.children('[data-tab="'+s+'"]').addClass("nav-tab-active"),a(t+'[data-tab="'+s+'"]').show()),$tabslocation.children("a").on("click",this.toggleTabs),this.addSaveTab($tabslocation)}}},e.prototype.addSaveTab=function(a){var e='<div class="save-indicator dashicons dashicons-warning"></div>';a.append(e)},e.prototype.toggleTabs=function(e){e.preventDefault();var t=".sub-tabs",i=".mb_tab";a(t).children("a").removeClass("nav-tab-active"),a(this).addClass("nav-tab-active"),a(i).hide();var o=a(this).data("tab");a(i+'[data-tab="'+o+'"]').show(),a('input[name="tab"]').val(o),a(document).trigger("maxTabChange",[o])},e.prototype.previewTab=function(){var e=(a(".mb-preview-window").is(":visible"),".sub-tabs"),t=e+' a[data-tab="preview"]';this.togglePreview(),a(t).off("click"),a(document).on("click",t,a.proxy(function(e){e.preventDefault(),e.stopPropagation();var t=a(".mb-preview-window").is(":visible");return this.togglePreview(t?!1:!0),a(document).trigger("updatePreviewWindow"),!1},this)),a(".mb-preview-window .close").on("click",{tab:t},function(e){a(e.data.tab).trigger("click")})},e.prototype.togglePreview=function(e){var t=".sub-tabs",i=t+' a[data-tab="preview"]';if("undefined"==typeof e)if(localStorage.getItem("mb-col-preview")){var o=localStorage.getItem("mb-col-preview");"string"==typeof o&&(o="true"==o?!0:!1),"boolean"==typeof o&&this.togglePreview(o)}else this.togglePreview(!0);else e?(a(".mb-preview-window").show(),a(i).addClass(" preview-on"),a(i+" .dashicons").addClass("dashicons-yes").removeClass("dashicons-no"),a(i).removeClass("preview-off"),localStorage.setItem("mb-col-preview",!0)):(a(".mb-preview-window").hide(),a(i).removeClass("preview-on"),a(i+" .dashicons").removeClass("dashicons-yes").addClass("dashicons-no"),a(i).addClass("preview-off"),localStorage.setItem("mb-col-preview",!1))};var t=new e;t.init()});