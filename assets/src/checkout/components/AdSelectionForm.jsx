import React from 'react';
import { ICONS } from '../../constants';
import Icon from '../../shared/components/Icon';

const AdSelectionForm = ({ adTypes, adFeatures }) => (
  <div className="ui basic segment">
    <table className="ui celled table">
      <thead className="center aligned">
        <tr>
          <th />
          {adTypes.map(adType => (
            <th key={adType.id}>{adType.name}</th>
          ))}
        </tr>
        <tr>
          <th />
          {adTypes.map(adType => (
            <th key={adType.id}>
              <div className="ui small button">
                Select
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {adFeatures.map(adFeature => (
          <tr key={adFeature.id}>
            <td>
              <div className="ui ribbon label">{adFeature.title}</div>
            </td>
            {adTypes.map(adType => (
              <td key={adType.id} className="center aligned">
                {adType.features.indexOf(adFeature.id) !== -1 &&
                  <Icon icon={ICONS.TICK} />
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot className="center aligned">
        <tr>
          <th />
          {adTypes.map(adType => (
            <th key={adType.id}>
              <div className="ui small button">
                Preview
              </div>
            </th>
          ))}
        </tr>
      </tfoot>
    </table>
  </div>
);

export default AdSelectionForm;
