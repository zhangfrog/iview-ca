<template>
<div>
    <Layout>
        <Header class="header">
            <Row>
                <i-col span="4" offset="1">
                    <img src="../assets/logo.png" alt="logo" class="logo">
                </i-col>
                <i-col span="14">
                    <Menu mode="horizontal" :active-name="activeName">
                        <MenuItem name="/csa" to="/csa">CA超级管理</MenuItem>
                        <MenuItem name="/cba" to="/cba">CA业务管理</MenuItem>
                        <MenuItem name="/ko" to="/ko">KMC操作</MenuItem>
                        <MenuItem name="/rba" to="/rba">RA业务管理</MenuItem>
                        <MenuItem name="/ro" to="/ro">RA操作</MenuItem>
                    </Menu>
                </i-col>
                <i-col span="4">
                    <Row>
                        <i-col span="8">
                            <Dropdown>
                                <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"></Avatar>
                                <DropdownMenu slot="list">
                                    <DropdownItem>我的主页</DropdownItem>
                                    <DropdownItem>我的收藏</DropdownItem>
                                    <DropdownItem>
                                        设置
                                        <Badge status="error" />
                                    </DropdownItem>
                                    <DropdownItem divided>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </i-col>
                        <i-col span="8">
                            <Dropdown>
                                <Badge :count="count" :offset="[20,4]">
                                    <Icon type="md-notifications-outline" size="24" />
                                </Badge>
                                <DropdownMenu slot="list">
                                    <Tabs value="notification">
                                        <TabPane label="通知" name="notification">
                                            <div class="notification">通知内容</div>
                                        </TabPane>
                                        <TabPane label="关注" name="follow">
                                            <div class="notification">关注内容</div>
                                        </TabPane>
                                        <TabPane label="系统" name="system">
                                            <div class="notification">系统内容</div>
                                        </TabPane>
                                    </Tabs>
                                </DropdownMenu>
                            </Dropdown>
                        </i-col>
                        <i-col span="8">
                            <Icon type="md-color-palette" size="24" @click="openTheme = true" />
                        </i-col>
                    </Row>
                </i-col>
            </Row>
        </Header>
        <Layout>
            <Sider class="sider" width="240" collapsible v-model="isCollapsed" :class="{ 'sider-hide': isCollapsed }">
                <Menu class="sider-menu" theme="dark" active-name="">
                    <Submenu name="certificateTemplateCustomization">
                        <template slot="title">
                            <Icon type="ios-paper" />
                            证书模版定制
                        </template>
                        <MenuItem name="humanCertificateTemplate"  @click.native="ctm = true" >
                        <Icon type="ios-people" />
                        人员证书模版
                        </MenuItem>
                        <MenuItem name="2-2">
                        Option 6
                        </MenuItem>
                        <Submenu name="3">
                            <template slot="title">Submenu</template>
                            <MenuItem name="3-1">Option 7</MenuItem>
                            <MenuItem name="3-2">Option 8</MenuItem>
                        </Submenu>
                    </Submenu>                    
                    <MenuItem name="option1">
                        <Icon type="ios-search"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem name="option2">
                        <Icon type="ios-apps"></Icon>
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="option3">
                        <Icon type="ios-bookmark"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Content class="content" :class="{ 'content-expand': isCollapsed }">
                <slot></slot>
            </Content>
        </Layout>

        <Drawer title="选择配色" v-model="openTheme" :closable="false">
        </Drawer>
    </Layout>
    <Modal
        v-model="ctm"
        title="证书模版所有项"
        :mask-closable="false"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>证书模版基本信息项&nbsp&nbsp&nbsp<Button size="small" icon="ios-add" @click="ctt.ctbam = true"
        title="证书模版所有项"
        :mask-closable="false"
        @on-ok="ok"
        @on-cancel="cancel"></Button></p>
        <br/>
        <Table stripe :columns="ctt.allItems.base.columns" :data="ctt.allItems.base.data"></Table>
        <br/>
        <p>密钥用法</p>
        <br/>
        <Table stripe :columns="ctt.allItems.kus.columns" :data="ctt.allItems.kus.data"></Table>
        <br/>
        <p>证书策略</p>
        <br/>
        <Table stripe :columns="ctt.allItems.cs.columns" :data="ctt.allItems.cs.data"></Table>
        <br/>  
        <p>主题备用名&nbsp&nbsp&nbsp<Button size="small" icon="ios-add"></Button></p>
        <br/>
        <Table stripe :columns="ctt.allItems.tbn.columns" :data="ctt.allItems.tbn.data"></Table>
        <br/>  
        <p>拓展密钥用法&nbsp&nbsp&nbsp<Button size="small" icon="ios-add"></Button></p>
        <br/>
        <Table stripe :columns="ctt.allItems.eku.columns" :data="ctt.allItems.eku.data"></Table>
        <br/>
        <p>预留拓展项&nbsp&nbsp&nbsp<Button size="small" icon="ios-add"></Button></p>
        <br/>
        <Table stripe :columns="ctt.allItems.eku.columns" :data="ctt.allItems.eku.data"></Table>
        <br/>                               
    </Modal>
    <Modal
        draggable scrollable
        :mask-closable="false"
        v-model="ctt.ctbam"
        title="证书模版基本信息项添加"
        @on-ok="ok"
        @on-cancel="cancel"
        z-index=1001>
        <div>This is the second modal</div>
    </Modal>
</div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                activeName: this.$route.path,
                count: 2,
                openTheme: false,
                isCollapsed: false,
                ctm: false,
                ctt: {
                    allItems:{
                        base: {
                            columns: [
                                {
                                    title: '模版信息项名称',
                                    key: 'name'
                                },
                                {
                                    title: '模版信息项标识',
                                    key: 'id'
                                },
                                {
                                    title: 'OID',
                                    key: 'oid'
                                }
                            ],
                            data: 
                            [
                                {
                                    name: '国名',
                                    id: 'CountryName',
                                    oid: '2.4.5.6',
                                },
                                {
                                    name: '组织名',
                                    id: 'organizationName',
                                    oid: '2.5.4.10',
                                },
                                {
                                    name: '单位名',
                                    id: 'organizationUnitName',
                                    oid: '2.5.4.11',
                                },
                                {
                                    name: '普通姓名',
                                    id: 'commonName',
                                    oid: '2.5.4.3',
                                },
                                {
                                    name: '证件号',
                                    id: 'SubjectID',
                                    oid: '2',
                                }
                            ]
                        },
                        kus: {
                            columns:[
                            {
                                title: '模版信息项名称',
                                key: 'name'
                            },
                            {
                                title: 'OID',
                                key: 'oid'
                            },   
                            {
                                title: '修改',
                                key: 'edit',
                                width: 80,
                                align: 'center',
                                render: (h, params) => {
                                    return h('div', [
                                        h('Button', {
                                            props: {
                                                type: 'error',
                                                size: 'small'
                                            },
                                            on: {
                                                click: () => {
                                                    // this.remove(params.index)
                                                    this.info()
                                                }
                                            }
                                        }, '修改')
                                    ]);
                                }
                            }                 
                            ],
                            data:[
                            {
                                name: '签名证书',
                                oid: 'C0'
                            },
                            {
                                name: '加密证书',
                                oid: '10'
                            }
                            ]
                        },
                        cs: {
                            columns: [
                                {
                                    title: '模版信息项名称',
                                    key: 'name'
                                },
                                {
                                    title: 'OID',
                                    key: 'oid'
                                },   
                            ],
                            data: [
                                {
                                    name: 'CPS',
                                    oid: '0'
                                },
                                {
                                    name: 'User Notice',
                                    oid: '1'
                                }
                            ]
                        },
                        tbn: {
                            columns: [
                                {
                                    title: '模版信息项名称',
                                    key: 'name'
                                },
                                {
                                    title: 'OID',
                                    key: 'oid'
                                },   
                            ],
                            data: [
                                {
                                    name: '登录名',
                                    oid: '2'
                                }
                            ]
                        },
                        eku: {
                            columns: [
                                {
                                    title: '模版信息项名称',
                                    key: 'name'
                                },
                                {
                                    title: 'OID',
                                    key: 'oid'
                                },   
                            ],
                            data: [
                                {
                                    name: '服务端验证',
                                    oid: '1.3.6.1.5.5.7.3.1'
                                },
                                {
                                    name: '客户端验证',
                                    oid: '1.3.6.1.5.5.7.3.2'
                                }
                            ]
                        },
                        oxi: {
                            columns: [
                                {
                                    title: '模版信息项名称',
                                    key: 'name'
                                },
                                {
                                    title: 'OID',
                                    key: 'oid'
                                },   
                            ]
                        },                                       
                    },
                    ctbam: false
                },
            };
        },
        created () {
            this.activeName = this.$route.path
        },
        methods: {
            humanCertificateTemplate () {

            },
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }, 
            info () {
                this.$Message.info('这是一条普通的提醒');
            }        
        }
    };
</script>

<style>
    .header{
        width: 100%;
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .logo{
        height: 50px;
        margin-top: 5px;
    }
    .notification{
        text-align: center;
        height: 200px;
    }
    .ivu-menu-horizontal.ivu-menu-light:after{
        display: none;
    }
    .sider{
        position: fixed;
        height: 100%;
        left: 0;
        overflow: auto;
        z-index: 1;
    }
    .sider-menu{
        margin-top: 60px;
    }
    .sider-hide .ivu-menu-item span{
        display: none;
    }
    .content{
        margin-left: 240px;
        margin-top: 60px;
        padding: 16px;
        transition: all .2s ease-in-out;
    }
    .content-expand{
        margin-left: 64px;
    }
</style>