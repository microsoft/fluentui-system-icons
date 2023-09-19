package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudOff48: ImageVector
  get() {
    if (_cloudOff48 != null) {
      return _cloudOff48!!
    }
    _cloudOff48 = fluentIcon(name = "Filled.CloudOff48", 48f) {
      materialPath {
          moveTo(33.732F, 35.5F)
          lineToRelative(8.134F, 8.134F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-37.5F, -37.5F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(9.845F, 9.844F)
          curveToRelative(-0.63F, 1.225F, -1.037F, 2.584F, -1.166F, 4.022F)
          horizontalLineTo(12.75F)
          curveTo(8.47F, 20.0F, 5.0F, 23.47F, 5.0F, 27.75F)
          curveToRelative(0.0F, 4.28F, 3.47F, 7.75F, 7.75F, 7.75F)
          horizontalLineToRelative(20.982F)
          close()
          moveTo(43.0F, 27.75F)
          curveToRelative(0.0F, 2.702F, -1.383F, 5.08F, -3.479F, 6.468F)
          lineTo(17.46F, 12.155F)
          curveTo(19.287F, 10.801F, 21.55F, 10.0F, 24.0F, 10.0F)
          curveToRelative(5.738F, 0.0F, 10.45F, 4.393F, 10.955F, 10.0F)
          horizontalLineToRelative(0.295F)
          curveToRelative(4.28F, 0.0F, 7.75F, 3.47F, 7.75F, 7.75F)
          close()        
      }
    }
    return _cloudOff48!!
  }

private var _cloudOff48: ImageVector? = null
