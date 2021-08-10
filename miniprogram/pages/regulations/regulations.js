// miniprogram/pages/regulations/regulations.js
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    load: true,
    list : [{
      id:0,
      name:'第一条',
      number:'一',
      content:'为了加强湿地保护管理，履行《关于特别是作为水禽栖息地的国际重要湿地公约》（以下简称“国际湿地公约”），根据法律法规和有关规定，制定本规定。'
    },{
      id:1,
      name:'第二条',
      number:'二',
      content:'本规定所称湿地，是指常年或者季节性积水地带、水域和低潮时水深不超过6米的海域，包括沼泽湿地、湖泊湿地、河流湿地、滨海湿地等自然湿地，以及重点保护野生动物栖息地或者重点保护野生植物原生地等人工湿地。'
    },{
      id:2,
      name:'第三条',
      number:'三',
      content:'国家对湿地实行全面保护、科学修复、合理利用、持续发展的方针。'
    },{
      id:3,
      name:'第四条',
      number:'四',
      content:' 国家林业局负责全国湿地保护工作的组织、协调、指导和监督，并组织、协调有关国际湿地公约的履约工作。县级以上地方人民政府林业主管部门按照有关规定负责本行政区域内的湿地保护管理工作。'
    },{
      id:4,
      name:'第五条',
      number:'五',
      content:'县级以上人民政府林业主管部门及有关湿地保护管理机构应当加强湿地保护宣传教育和培训，结合世界湿地日、世界野生动植物日、爱鸟周和保护野生动物宣传月等开展宣传教育活动，提高公众湿地保护意识。',
      content1:'县级以上人民政府林业主管部门应当组织开展湿地保护管理的科学研究，应用推广研究成果，提高湿地保护管理水平。'
    },{
      id:5,
      name:'第六条',
      number:'六',
      content:'县级以上人民政府林业主管部门应当鼓励和支持公民、法人以及其他组织，以志愿服务、捐赠等形式参与湿地保护。'
    },{
      id:6,
      name:'第七条',
      number:'七',
      content:'国家林业局会同国务院有关部门编制全国和区域性湿地保护规划，报国务院或者其授权的部门批准。',
      content1:'县级以上地方人民政府林业主管部门会同同级人民政府有关部门，按照有关规定编制本行政区域内的湿地保护规划，报同级人民政府或者其授权的部门批准。'
    },{
      id:7,
      name:'第八条',
      number:'八',
      content:'湿地保护规划应当包括下列内容：',
      content1:'（一）湿地资源分布情况、类型及特点、水资源、野生生物资源状况；',
      content2:'（二）保护和合理利用的指导思想、原则、目标和任务；',
      content3:'（三）湿地生态保护重点建设项目与建设布局；',
      content4:'（四）投资估算和效益分析；',
      content5:'（五）保障措施。',

    },{
      id:8,
      name:'第九条',
      number:'九',
      content:'经批准的湿地保护规划必须严格执行；未经原批准机关批准，不得调整或者修改。'
    },{
      id:9,
      name:'第十条',
      number:'十',
      content:'国家林业局定期组织开展全国湿地资源调查、监测和评估，按照有关规定向社会公布相关情况。',
      content1:'湿地资源调查、监测、评估等技术规程，由国家林业局在征求有关部门和单位意见的基础上制定。',
      content2:'县级以上地方人民政府林业主管部门及有关湿地保护管理机构应当组织开展本行政区域内的湿地资源调查、监测和评估工作，按照有关规定向社会公布相关情况。',
    },{
      id:10,
      name:'第十一条',
      number:'十一',
      content:'县级以上人民政府林业主管部门可以采取湿地自然保护区、湿地公园、湿地保护小区等方式保护湿地，健全湿地保护管理机构和管理制度，完善湿地保护体系，加强湿地保护。'
    },{
      id:11,
      name:'第十二条',
      number:'十二',
      content:'湿地按照其生态区位、生态系统功能和生物多样性等重要程度，分为国家重要湿地、地方重要湿地和一般湿地。'
    },{
      id:12,
      name:'第十三条',
      number:'十三',
      content:'国家林业局会同国务院有关部门制定国家重要湿地认定标准和管理办法，明确相关管理规则和程序，发布国家重要湿地名录。'
    },{
      id:13,
      name:'第十四条',
      number:'十四',
      content:'省、自治区、直辖市人民政府林业主管部门应当在同级人民政府指导下，会同有关部门制定地方重要湿地和一般湿地认定标准和管理办法，发布地方重要湿地和一般湿地名录。'
    },{
      id:14,
      name:'第十五条',
      number:'十五',
      content:'符合国际湿地公约国际重要湿地标准的，可以申请指定为国际重要湿地。',
      content1:'申请指定国际重要湿地的，由国务院有关部门或者湿地所在地省、自治区、直辖市人民政府林业主管部门向国家林业局提出。国家林业局应当组织论证、审核，对符合国际重要湿地条件的，在征得湿地所在地省、自治区、直辖市人民政府和国务院有关部门同意后，报国际湿地公约秘书处核准列入《国际重要湿地名录》。'
    },{
      id:15,
      name:'第十六条',
      number:'十六',
      content:'国家林业局对国际重要湿地的保护管理工作进行指导和监督，定期对国际重要湿地的生态状况开展检查和评估，并向社会公布结果。',
      content1:'国际重要湿地所在地的县级以上地方人民政府林业主管部门应当会同同级人民政府有关部门对国际重要湿地保护管理状况进行检查，指导国际重要湿地保护管理机构维持国际重要湿地的生态特征。'
    },{
      id:16,
      name:'第十七条',
      number:'十七',
      content:'国际重要湿地保护管理机构应当建立湿地生态预警机制，制定实施管理计划，开展动态监测，建立数据档案。'
    },{
      id:17,
      name:'第十八条',
      number:'十八',
      content:'因气候变化、自然灾害等造成国际重要湿地生态特征退化的，省、自治区、直辖市人民政府林业主管部门应当会同同级人民政府有关部门进行调查，指导国际重要湿地保护管理机构制定实施补救方案，并向同级人民政府和国家林业局报告。',
      content1:'因工程建设等造成国际重要湿地生态特征退化甚至消失的，省、自治区、直辖市人民政府林业主管部门应当会同同级人民政府有关部门督促、指导项目建设单位限期恢复，并向同级人民政府和国家林业局报告；对逾期不予恢复或者确实无法恢复的，由国家林业局会商所在地省、自治区、直辖市人民政府和国务院有关部门后，按照有关规定处理。'
    },{
      id:18,
      name:'第十九条',
      number:'十九',
      content:'具备自然保护区建立条件的湿地，应当依法建立自然保护区。',
      content1:'自然保护区的建立和管理按照自然保护区管理的有关规定执行。'
    },{
      id:19,
      name:'第二十条',
      number:'二十',
      content:'以保护湿地生态系统、合理利用湿地资源、开展湿地宣传教育和科学研究为目的，并可供开展生态旅游等活动的湿地，可以设立湿地公园。',
      content1:'湿地公园分为国家湿地公园和地方湿地公园。'
    },{
      id:20,
      name:'第二十一条',
      number:'二十一',
      content:'国家湿地公园实行晋升制。符合下列条件的，可以申请晋升为国家湿地公园：',
      content1:'（一）湿地生态系统在全国或者区域范围内具有典型性，或者湿地区域生态地位重要，或者湿地主体生态功能具有典型示范性，或者湿地生物多样性丰富，或者集中分布有珍贵、濒危的野生生物物种；',
      content2:'（二）具有重要或者特殊科学研究、宣传教育和文化价值；',
      content3:'（三）成为省级湿地公园两年以上（含两年）；',
      content4:'（四）保护管理机构和制度健全；',
      content5:'（五）省级湿地公园总体规划实施良好；',
      content6:'（六）土地权属清晰，相关权利主体同意作为国家湿地公园；',
      content7:'（七）湿地保护、科研监测、科普宣传教育等工作取得显著成效。'
    },{
      id:21,
      name:'第二十二条',
      number:'二十二',
      content:'申请晋升为国家湿地公园的，由省、自治区、直辖市人民政府林业主管部门向国家林业局提出申请。国家林业局在收到申请后，组织论证审核，对符合条件的，晋升为国家湿地公园。'
    },{
      id:22,
      name:'第二十三条',
      number:'二十三',
      content:'省级以上人民政府林业主管部门应当对国家湿地公园的建设和管理进行监督检查和评估。',
      content1:'因自然因素或者管理不善导致国家湿地公园条件丧失的，或者对存在问题拒不整改或者整改不符合要求的，国家林业局应当撤销国家湿地公园的命名，并向社会公布。'
    },{
      id:23,
      name:'第二十四条',
      number:'二十四',
      content:'地方湿地公园的设立和管理，按照地方有关规定办理。'
    },{
      id:24,
      name:'第二十五条',
      number:'二十五',
      content:'因保护湿地给湿地所有者或者经营者合法权益造成损失的，应当按照有关规定予以补偿。'
    },{
      id:25,
      name:'第二十六条',
      number:'二十六',
      content:'县级以上人民政府林业主管部门及有关湿地保护管理机构应当组织开展退化湿地修复工作，恢复湿地功能或者扩大湿地面积。'
    },{
      id:26,
      name:'第二十七条',
      number:'二十七',
      content:'县级以上人民政府林业主管部门及有关湿地保护管理机构应当开展湿地动态监测，并在湿地资源调查和监测的基础上，建立和更新湿地资源档案。'
    },{
      id:27,
      name:'第二十八条',
      number:'二十八',
      content:'县级以上人民政府林业主管部门应当对开展生态旅游等利用湿地资源的活动进行指导和监督。'
    },{
      id:28,
      name:'第二十九条',
      number:'二十九',
      content:'除法律法规有特别规定的以外，在湿地内禁止从事下列活动：',
      content1:'（一）开（围）垦、填埋或者排干湿地；',
      content2:'（二）永久性截断湿地水源；',
      content3:'（三）挖沙、采矿；',
      content4:'（四）倾倒有毒有害物质、废弃物、垃圾；',
      content5:'（五）破坏野生动物栖息地和迁徙通道、鱼类洄游通道，滥采滥捕野生动植物；',
      content6:'（六）引进外来物种；',
      content7:'（七）擅自放牧、捕捞、取土、取水、排污、放生；',
      content8:'（八）其他破坏湿地及其生态功能的活动。',

    },{
      id:29,
      name:'第三十条',
      number:'三十',
      content:'建设项目应当不占或者少占湿地，经批准确需征收、占用湿地并转为其他用途的，用地单位应当按照“先补后占、占补平衡”的原则，依法办理相关手续。',
      content1:'临时占用湿地的，期限不得超过2年；临时占用期限届满，占用单位应当对所占湿地限期进行生态修复。'
    },{
      id:30,
      name:'第三十一条',
      number:'三十一',
      content:'县级以上地方人民政府林业主管部门应当会同同级人民政府有关部门，在同级人民政府的组织下建立湿地生态补水协调机制，保障湿地生态用水需求。 '
    },{
      id:31,
      name:'第三十二条',
      number:'三十二',
      content:'县级以上人民政府林业主管部门应当按照有关规定开展湿地防火工作，加强防火基础设施和队伍建设。'
    },{
      id:32,
      name:'第三十三条',
      number:'三十三',
      content:'县级以上人民政府林业主管部门应当会同同级人民政府有关部门协调、组织、开展湿地有害生物防治工作；湿地保护管理机构应当按照有关规定承担湿地有害生物防治的具体工作。'
    },{
      id:33,
      name:'第三十四条',
      number:'三十四',
      content:'县级以上人民政府林业主管部门应当会同同级人民政府有关部门开展湿地保护执法活动，对破坏湿地的违法行为依法予以处理。'
    },{
      id:34,
      name:'第三十五条',
      number:'三十五',
      content:'本规定自2013年5月1日起施行。'
    }]
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    this.setData({
      listCur: {
        id:0,
        name:'第一条',
        content:''
      }
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  }
})