package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Important20: ImageVector
  get() {
    if (_important20 != null) {
      return _important20!!
    }
    _important20 = fluentIcon(name = "Regular.Important20", 20f) {
      materialPath {
          moveTo(10.0F, 3.0F)
          curveTo(8.895F, 3.0F, 8.0F, 3.895F, 8.0F, 5.0F)
          curveToRelative(0.0F, 2.065F, 0.746F, 4.915F, 1.184F, 6.403F)
          curveTo(9.288F, 11.756F, 9.617F, 12.0F, 10.001F, 12.0F)
          curveToRelative(0.384F, 0.0F, 0.712F, -0.243F, 0.816F, -0.595F)
          curveTo(11.255F, 9.925F, 12.0F, 7.09F, 12.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveTo(7.0F, 5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          curveToRelative(0.0F, 2.25F, -0.788F, 5.214F, -1.224F, 6.69F)
          curveTo(11.54F, 12.481F, 10.81F, 13.0F, 10.0F, 13.0F)
          reflectiveCurveToRelative(-1.542F, -0.52F, -1.776F, -1.315F)
          curveTo(7.789F, 10.204F, 7.0F, 7.227F, 7.0F, 5.0F)
          close()
          moveToRelative(3.0F, 10.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-2.0F, 1.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          close()        
      }
    }
    return _important20!!
  }

private var _important20: ImageVector? = null
