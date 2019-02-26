import template from './sw-avatar.html.twig';
import './sw-avatar.scss';

/**
 * @description The component helps adding a custom user image or initials to the administration.
 * @status ready
 * @example-type static
 * @component-example
 * <sw-avatar color="#dd4800"
 *            size="48px"
 *            firstName="John"
 *            lastName="Doe"
 *            :imageUrl="getImageUrl">
 * </sw-avatar>
 */
export default {
    name: 'sw-avatar',
    template,

    props: {
        color: {
            type: String,
            required: false,
            default: ''
        },
        size: {
            type: String,
            required: false
        },
        firstName: {
            type: String,
            required: false,
            default: ''
        },
        lastName: {
            type: String,
            required: false,
            default: ''
        },
        imageUrl: {
            type: String,
            required: false
        }
    },

    data() {
        return {
            fontSize: 16,
            lineHeight: 16
        };
    },

    computed: {
        avatarSize() {
            const size = this.size;

            return {
                width: size,
                height: size
            };
        },

        avatarInitials() {
            const firstNameLetter = this.firstName ? this.firstName[0] : '';
            const lastNameLetter = this.lastName ? this.lastName[0] : '';

            return firstNameLetter + lastNameLetter;
        },

        avatarInitialsSize() {
            return {
                'font-size': `${this.fontSize}px`,
                'line-height': `${this.lineHeight}px`
            };
        },

        avatarImage() {
            return {
                'background-image': `url(${this.imageUrl})`
            };
        },

        avatarColor() {
            return {
                'background-color': this.color
            };
        }
    },

    mounted() {
        this.mountedComponent();
    },

    methods: {
        mountedComponent() {
            this.generateAvatarInitialsSize();
        },

        generateAvatarInitialsSize() {
            const avatarSize = this.$refs.swAvatar.offsetHeight;

            this.fontSize = Math.round(avatarSize * 0.4);
            this.lineHeight = Math.round(avatarSize * 0.98);
        }
    }
};
