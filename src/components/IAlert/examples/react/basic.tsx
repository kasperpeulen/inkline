import { h } from '@inkline/paper';
import { IAlert, IIcon } from '@inkline/inkline/components';

export default (props: any) => <>
    <IAlert {...props}>
        <IAlert.Icon>
            <IIcon name="ink-info" />
        </IAlert.Icon>
        <p>Heads up! This alert needs your attention, and it might be <a href="">important</a>.</p>
    </IAlert>
</>;
