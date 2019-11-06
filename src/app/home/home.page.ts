import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
declare var Wechat: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) { }

  /**
   * 消息提示
   * @param header 标题
   * @param subHeader 子标题
   * @param inputs 表单组件
   * @param message 消息内容
   * @param buttons 操作组件
   */
  private async alertMsg(header?: string, subHeader?: string, inputs?: Array<any>, message?: string, buttons?: Array<any>) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      inputs,
      message,
      buttons
    });

    await alert.present();
  }

  /**
   * 拉起微信小程序
   */
  openMini() {
    let params = {
      userName: 'gh_e575c91b72f6', // userName
      path: 'pages/landscape/landscape', // open mini program page
      // 正式版：0 开发版：1 体验版 ： 2
      miniprogramType: Wechat.Mini.PREVIEW
    };

    Wechat.openMiniProgram(params, data => {
      // data:{extMsg:""}  extMsg: Corresponds to the app-parameter attribute in the Mini Program component <button open-type="launchApp">
      console.log(data);
      this.alertMsg('提示', '拉起微信小程序', [], `拉起微信小程序成功---${data}`, ['取消', '确认']);
    }, (err) => {
      this.alertMsg('提示', '拉起微信小程序', [], `拉起微信小程序失败---${err}`, ['取消', '确认']);
    });
  }

}
