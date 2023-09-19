package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoPerson48: ImageVector
  get() {
    if (_videoPerson48 != null) {
      return _videoPerson48!!
    }
    _videoPerson48 = fluentIcon(name = "Filled.VideoPerson48", 48f) {
      materialPath {
          moveTo(30.0F, 20.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveTo(4.0F, 11.75F)
          curveTo(4.0F, 9.679F, 5.679F, 8.0F, 7.75F, 8.0F)
          horizontalLineToRelative(32.5F)
          curveTo(42.321F, 8.0F, 44.0F, 9.679F, 44.0F, 11.75F)
          verticalLineToRelative(24.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(7.75F)
          curveTo(5.679F, 40.0F, 4.0F, 38.321F, 4.0F, 36.25F)
          verticalLineToRelative(-24.5F)
          close()
          moveToRelative(3.75F, -1.25F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(24.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(-6.25F)
          curveToRelative(0.0F, -1.795F, 1.455F, -3.25F, 3.25F, -3.25F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(6.25F)
          horizontalLineToRelative(6.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-24.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(7.75F)
          close()        
      }
    }
    return _videoPerson48!!
  }

private var _videoPerson48: ImageVector? = null
