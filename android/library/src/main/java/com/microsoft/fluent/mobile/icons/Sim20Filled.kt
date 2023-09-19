package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Sim20: ImageVector
  get() {
    if (_sim20 != null) {
      return _sim20!!
    }
    _sim20 = fluentIcon(name = "Filled.Sim20", 20f) {
      materialPath {
          moveTo(4.0F, 5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(3.464F)
          curveToRelative(0.796F, 0.0F, 1.56F, 0.316F, 2.122F, 0.879F)
          lineToRelative(2.535F, 2.535F)
          curveTo(15.684F, 5.977F, 16.0F, 6.74F, 16.0F, 7.536F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(3.0F, 5.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(9.0F)
          horizontalLineTo(8.5F)
          curveTo(7.672F, 9.0F, 7.0F, 9.672F, 7.0F, 10.5F)
          close()
          moveTo(7.0F, 12.0F)
          verticalLineToRelative(1.5F)
          curveTo(7.0F, 14.328F, 7.672F, 15.0F, 8.5F, 15.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(4.5F, 3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          curveTo(13.0F, 9.672F, 12.328F, 9.0F, 11.5F, 9.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(0.5F)
          close()        
      }
    }
    return _sim20!!
  }

private var _sim20: ImageVector? = null
