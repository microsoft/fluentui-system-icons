package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Checkmark32: ImageVector
  get() {
    if (_checkmark32 != null) {
      return _checkmark32!!
    }
    _checkmark32 = fluentIcon(name = "Filled.Checkmark32", 32f) {
      materialPath {
          moveTo(29.907F, 5.14F)
          curveToRelative(0.475F, 0.502F, 0.454F, 1.293F, -0.047F, 1.767F)
          lineToRelative(-19.0F, 18.0F)
          curveToRelative(-0.242F, 0.23F, -0.566F, 0.353F, -0.9F, 0.342F)
          curveToRelative(-0.332F, -0.01F, -0.648F, -0.153F, -0.875F, -0.397F)
          lineToRelative(-6.75F, -7.25F)
          curveToRelative(-0.47F, -0.506F, -0.442F, -1.296F, 0.063F, -1.767F)
          curveToRelative(0.506F, -0.47F, 1.296F, -0.442F, 1.767F, 0.063F)
          lineToRelative(5.89F, 6.327F)
          lineTo(28.14F, 5.093F)
          curveToRelative(0.502F, -0.475F, 1.293F, -0.454F, 1.767F, 0.047F)
          close()        
      }
    }
    return _checkmark32!!
  }

private var _checkmark32: ImageVector? = null
