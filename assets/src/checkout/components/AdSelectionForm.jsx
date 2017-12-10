import React from 'react';
import { ICONS } from '../../constants';
import Icon from '../../shared/components/Icon';

const AdSelectionForm = ({ adTypes, adFeatures, onSelectClicked }) => (
  <div className="ui basic segment ad-selection-form">
    <table className="ui celled striped table">
      <thead className="center aligned">
        <tr>
          <th />
          {adTypes.map(adType => (
            <th key={adType.id} className={`${adType.isActive ? 'active' : ''}`}>{adType.name}</th>
          ))}
        </tr>
        <tr>
          <th />
          {adTypes.map(adType => (
            <th key={adType.id} className={`${adType.isActive ? 'active' : ''}`}>
              <span className="price">${adType.price}</span>
              <span className="price-suffix">+GST</span>
            </th>
          ))}
        </tr>
        <tr>
          <th />
          {adTypes.map(adType => (
            <th key={adType.id} className={`${adType.isActive ? 'active' : ''}`}>
              <button className={`ui small button${adType.isActive ? ' active' : ''}`} onClick={() => { onSelectClicked(adType); }}>
                Select
              </button>
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
              <td key={adType.id} className={`center aligned${adType.isActive ? ' active' : ''}`}>
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
