package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LockClosed24: ImageVector
  get() {
    if (_lockClosed24 != null) {
      return _lockClosed24!!
    }
    _lockClosed24 = fluentIcon(name = "Regular.LockClosed24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(1.75F)
          curveTo(18.993F, 8.0F, 20.0F, 9.007F, 20.0F, 10.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(6.25F)
          curveTo(5.007F, 22.0F, 4.0F, 20.993F, 4.0F, 19.75F)
          verticalLineToRelative(-9.5F)
          curveTo(4.0F, 9.007F, 5.007F, 8.0F, 6.25F, 8.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          close()
          moveToRelative(5.75F, 7.5F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveToRelative(-5.75F, 4.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveToRelative(-0.671F, 1.5F, -1.5F, 1.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          reflectiveCurveToRelative(0.672F, -1.5F, 1.5F, -1.5F)
          close()
          moveToRelative(0.0F, -10.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(5.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          close()        
      }
    }
    return _lockClosed24!!
  }

private var _lockClosed24: ImageVector? = null
