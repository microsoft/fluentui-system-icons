package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DesktopMac24: ImageVector
  get() {
    if (_desktopMac24 != null) {
      return _desktopMac24!!
    }
    _desktopMac24 = fluentIcon(name = "Regular.DesktopMac24", 24f) {
      materialPath {
          moveTo(4.25F, 3.0F)
          curveTo(3.007F, 3.0F, 2.0F, 4.007F, 2.0F, 5.25F)
          verticalLineToRelative(10.5F)
          curveTo(2.0F, 16.993F, 3.007F, 18.0F, 4.25F, 18.0F)
          horizontalLineTo(9.5F)
          verticalLineToRelative(1.25F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-0.5F)
          curveTo(7.336F, 20.5F, 7.0F, 20.836F, 7.0F, 21.25F)
          reflectiveCurveTo(7.336F, 22.0F, 7.75F, 22.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-0.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(5.25F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(5.25F)
          curveTo(22.0F, 4.007F, 20.993F, 3.0F, 19.75F, 3.0F)
          horizontalLineTo(4.25F)
          close()
          moveTo(13.0F, 18.0F)
          verticalLineToRelative(1.25F)
          curveToRelative(0.0F, 0.45F, 0.108F, 0.875F, 0.3F, 1.25F)
          horizontalLineToRelative(-2.6F)
          curveToRelative(0.192F, -0.375F, 0.3F, -0.8F, 0.3F, -1.25F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(2.0F)
          close()
          moveTo(3.5F, 5.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(15.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(-17.0F)
          verticalLineTo(5.25F)
          close()
          moveToRelative(0.0F, 9.25F)
          horizontalLineToRelative(17.0F)
          verticalLineToRelative(1.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(4.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(14.5F)
          close()        
      }
    }
    return _desktopMac24!!
  }

private var _desktopMac24: ImageVector? = null
