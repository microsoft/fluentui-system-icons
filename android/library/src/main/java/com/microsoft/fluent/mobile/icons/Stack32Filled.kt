package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Stack32: ImageVector
  get() {
    if (_stack32 != null) {
      return _stack32!!
    }
    _stack32 = fluentIcon(name = "Filled.Stack32", 32f) {
      materialPath {
          moveTo(2.0F, 7.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(8.17F, 19.0F)
          curveToRelative(0.412F, 1.165F, 1.523F, 2.0F, 2.83F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(6.074F, 0.0F, 11.0F, -4.925F, 11.0F, -11.0F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -1.306F, -0.836F, -2.418F, -2.0F, -2.83F)
          verticalLineTo(17.0F)
          curveToRelative(0.0F, 4.97F, -4.03F, 9.0F, -9.0F, 9.0F)
          horizontalLineToRelative(-8.83F)
          close()
          moveTo(9.0F, 24.0F)
          curveToRelative(-1.307F, 0.0F, -2.418F, -0.835F, -2.83F, -2.0F)
          horizontalLineTo(19.0F)
          curveToRelative(2.76F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          verticalLineTo(8.17F)
          curveToRelative(1.164F, 0.412F, 2.0F, 1.524F, 2.0F, 2.83F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 3.866F, -3.135F, 7.0F, -7.0F, 7.0F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _stack32!!
  }

private var _stack32: ImageVector? = null
