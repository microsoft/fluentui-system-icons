package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CameraDome48: ImageVector
  get() {
    if (_cameraDome48 != null) {
      return _cameraDome48!!
    }
    _cameraDome48 = fluentIcon(name = "Filled.CameraDome48", 48f) {
      materialPath {
          moveTo(4.0F, 7.25F)
          curveTo(4.0F, 5.455F, 5.455F, 4.0F, 7.25F, 4.0F)
          horizontalLineToRelative(33.5F)
          curveTo(42.545F, 4.0F, 44.0F, 5.455F, 44.0F, 7.25F)
          reflectiveCurveToRelative(-1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(7.25F)
          curveTo(5.455F, 10.5F, 4.0F, 9.045F, 4.0F, 7.25F)
          close()
          moveTo(24.0F, 18.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveToRelative(-3.806F, -8.5F, -8.5F, -8.5F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          close()
          moveToRelative(18.0F, -8.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 9.941F, 8.059F, 18.0F, 18.0F, 18.0F)
          reflectiveCurveToRelative(18.0F, -8.059F, 18.0F, -18.0F)
          verticalLineTo(13.0F)
          close()
          moveTo(13.0F, 27.0F)
          curveToRelative(0.0F, -6.075F, 4.925F, -11.0F, 11.0F, -11.0F)
          reflectiveCurveToRelative(11.0F, 4.925F, 11.0F, 11.0F)
          reflectiveCurveToRelative(-4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveToRelative(-11.0F, -4.925F, -11.0F, -11.0F)
          close()        
      }
    }
    return _cameraDome48!!
  }

private var _cameraDome48: ImageVector? = null
