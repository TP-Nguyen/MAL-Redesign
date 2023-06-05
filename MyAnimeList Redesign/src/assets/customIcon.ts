import { h } from 'vue'
import type { IconSet, IconProps } from 'vuetify'
import animeIcon from './icon/play.vue'
import mangaIcon from './icon/book.vue'
import communityIcon from './icon/people.vue'
import industryIcon from './icon/briefcase.vue'

import alertIcon from './icon/alert-circle.vue'
import contrastIcon from './icon/contrast.vue'
import filterIcon from './icon/filter.vue'
import helpIcon from './icon/help-circle.vue'
import informationIcon from './icon/information-circle.vue'
import languageIcon from './icon/language.vue'
import mailIcon from './icon/mail.vue'
import notificationsIcon from './icon/notifications.vue'
import settingIcon from './icon/settings.vue'
import playIcon from './icon/play-circle.vue'
import arrowDownIcon from './icon/arrow-down.vue'
import arrowUpIcon from './icon/arrow-up.vue'
import arrowLeftIcon from './icon/arrow-left.vue'
import arrowRightIcon from './icon/arrow-right.vue'
// import Icon from './icon/'

const customIcon: any = {
animeIcon,
mangaIcon,
communityIcon,
industryIcon,
alertIcon,
contrastIcon,
filterIcon,
helpIcon,
informationIcon,
languageIcon,
mailIcon,
notificationsIcon,
settingIcon,
playIcon,
arrowDownIcon,arrowUpIcon,arrowLeftIcon,arrowRightIcon
}

const custom: IconSet = {
  component: (props: IconProps) => h(customIcon[props.icon]),
}

export { custom }
