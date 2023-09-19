package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorHoverOff20: ImageVector
  get() {
    if (_cursorHoverOff20 != null) {
      return _cursorHoverOff20!!
    }
    _cursorHoverOff20 = fluentIcon(name = "Filled.CursorHoverOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(1.242F, 1.241F)
          curveTo(2.583F, 4.354F, 2.0F, 5.11F, 2.0F, 6.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-4.5F)
          curveToRelative(0.0F, -0.229F, 0.052F, -0.448F, 0.146F, -0.646F)
          lineTo(10.0F, 10.707F)
          verticalLineTo(17.5F)
          curveToRelative(0.0F, 0.218F, 0.142F, 0.411F, 0.35F, 0.477F)
          reflectiveCurveToRelative(0.434F, -0.012F, 0.56F, -0.19F)
          lineToRelative(1.571F, -2.245F)
          lineToRelative(2.781F, 0.427F)
          lineToRelative(1.884F, 1.885F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-8.0F, -8.0F)
          lineToRelative(-7.0F, -7.0F)
          close()
          moveToRelative(11.213F, 12.627F)
          lineToRelative(-1.74F, -0.268F)
          curveToRelative(-0.188F, -0.03F, -0.376F, 0.051F, -0.486F, 0.207F)
          lineToRelative(-0.84F, 1.2F)
          verticalLineToRelative(-4.206F)
          lineToRelative(3.066F, 3.067F)
          close()
          moveToRelative(2.84F, 0.01F)
          curveTo(17.554F, 14.454F, 18.0F, 13.779F, 18.0F, 13.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.121F)
          lineToRelative(10.784F, 10.784F)
          close()        
      }
    }
    return _cursorHoverOff20!!
  }

private var _cursorHoverOff20: ImageVector? = null
