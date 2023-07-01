package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pentagon48: ImageVector
  get() {
    if (_pentagon48 != null) {
      return _pentagon48!!
    }
    _pentagon48 = fluentIcon(name = "Regular.Pentagon48", 48f) {
      materialPath {
          moveTo(21.502F, 4.313F)
          curveToRelative(1.49F, -1.084F, 3.509F, -1.084F, 5.0F, 0.0F)
          lineToRelative(15.75F, 11.456F)
          curveToRelative(1.488F, 1.082F, 2.11F, 3.0F, 1.543F, 4.75F)
          lineToRelative(-6.018F, 18.54F)
          curveToRelative(-0.569F, 1.752F, -2.2F, 2.938F, -4.042F, 2.938F)
          horizontalLineTo(14.268F)
          curveToRelative(-1.842F, 0.0F, -3.474F, -1.187F, -4.042F, -2.938F)
          lineToRelative(-6.018F, -18.54F)
          curveToRelative(-0.568F, -1.75F, 0.054F, -3.668F, 1.542F, -4.75F)
          lineTo(21.502F, 4.313F)
          close()
          moveToRelative(3.529F, 2.022F)
          curveToRelative(-0.614F, -0.447F, -1.445F, -0.447F, -2.059F, 0.0F)
          lineTo(7.221F, 17.79F)
          curveToRelative(-0.613F, 0.445F, -0.87F, 1.235F, -0.635F, 1.955F)
          lineToRelative(6.017F, 18.54F)
          curveToRelative(0.235F, 0.722F, 0.907F, 1.21F, 1.665F, 1.21F)
          horizontalLineToRelative(19.467F)
          curveToRelative(0.758F, 0.0F, 1.43F, -0.488F, 1.664F, -1.21F)
          lineToRelative(6.018F, -18.54F)
          curveToRelative(0.234F, -0.72F, -0.023F, -1.51F, -0.635F, -1.955F)
          lineTo(25.03F, 6.335F)
          close()        
      }
    }
    return _pentagon48!!
  }

private var _pentagon48: ImageVector? = null
