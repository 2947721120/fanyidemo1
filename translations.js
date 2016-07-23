/**
 * INSPINIA - Responsive Admin Theme
 *
 */
function config($translateProvider) {

    $translateProvider
        .translations('en', {

            // Define all menu elements
            DASHBOARD: 'Dashboard',
            GRAPHS: 'Graphs',
            MAILBOX: 'Mailbox',
            WIDGETS: 'Widgets',
            METRICS: 'Metrics',
            FORMS: 'Forms',
            APPVIEWS: 'App views',
            OTHERPAGES: 'Other pages',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Miscellaneous',
            GRIDOPTIONS: 'Grid options',
            TABLES: 'Tables',
            COMMERCE: 'E-commerce',
            GALLERY: 'Gallery',
            MENULEVELS: 'Menu levels',
            ANIMATIONS: 'Animations',
            LANDING: 'Landing page',
            LAYOUTS: 'Layouts',
		

            // Define some custom text
            WELCOME: 'Welcome Amelia',
            MESSAGEINFO: 'You have 42 messages and 6 notifications.',
            SEARCH: 'Search for something...',
            DEMO: 'Internationalization (sometimes shortened to \"I18N , meaning \"I - eighteen letters -N\") is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization . The internationalization process is sometimes called translation or localization enablement .'

        })
            .translations('zh_cn', {

            // Define all menu elements
            DASHBOARD: '仪表盘',
            GRAPHS: '图型',
            MAILBOX: '邮箱',
            WIDGETS: '窗口小部件',
            METRICS: '度量',
            FORMS: '形式',
            APPVIEWS: '应用程序的意见',
            OTHERPAGES: '其他的页面',
            UIELEMENTS: 'UI元素',
            MISCELLANEOUS: '其他',
            GRIDOPTIONS: '网格选项',
            TABLES: '表格',
            COMMERCE: '电子商务',
            GALLERY: '画廊',
            MENULEVELS: '菜单层次',
            ANIMATIONS: '动画',
            LANDING: '着陆页',
            LAYOUTS: '布局',
            COLLAPSE_MENU : '折叠菜单',
            // Define some custom text
            WELCOME: '欢迎阿米莉亚',
            MESSAGEINFO: '你有42个消息和6个通知.',
            SEARCH: '搜索的东西...',
            DEMO: '国际化（有时简称i18n，意思我-十八个字母）的规划和实施，他们可以很容易地适应特定的本地语言和文化产品和服务的过程，这一过程称为定位。国际化过程有时被称为翻译或本地化支持 .'

        })
        .translations('es', {

            // Define all menu elements
            DASHBOARD: 'Salpicadero',
            GRAPHS: 'Gráficos',
            MAILBOX: 'El correo',
            WIDGETS: 'Widgets',
            METRICS: 'Métrica',
            FORMS: 'Formas',
            APPVIEWS: 'Vistas app',
            OTHERPAGES: 'Otras páginas',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Misceláneo',
            GRIDOPTIONS: 'Cuadrícula',
            TABLES: 'Tablas',
            COMMERCE: 'E-comercio',
            GALLERY: 'Galería',
            MENULEVELS: 'Niveles de menú',
            ANIMATIONS: 'Animaciones',
            LANDING: 'Página de destino',
            LAYOUTS: 'Esquemas',

            //定义一些自定义文本
            WELCOME: 'Bienvenido Amelia',
            MESSAGEINFO: 'Usted tiene 42 mensajes y 6 notificaciones.',
            SEARCH: 'Busca algo ...',
            DEMO: 'Internacionalización (a veces abreviado como \"I18N, que significa\" I - dieciocho letras N \") es el proceso de planificación e implementación de productos y servicios de manera que se pueden adaptar fácilmente a las lenguas y culturas locales específicas, un proceso llamado localización El proceso de internacionalización. a veces se llama la traducción o la habilitación de localización.'
        });

    $translateProvider.preferredLanguage('en');//默认语言

}

angular
    .module('inspinia')
    .config(config)
