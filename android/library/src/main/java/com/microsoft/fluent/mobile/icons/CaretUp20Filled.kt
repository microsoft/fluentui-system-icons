package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretUp20: ImageVector
  get() {
    if (_caretUp20 != null) {
      return _caretUp20!!
    }
    _caretUp20 = fluentIcon(name = "Filled.CaretUp20", 20f) {
      materialPath {
          moveTo(5.797F, 13.908F)
          curveToRelative(-0.84F, 0.0F, -1.306F, -0.974F, -0.778F, -1.628F)
          lineToRelative(3.814F, -4.723F)
          curveToRelative(0.6F, -0.743F, 1.734F, -0.743F, 2.334F, 0.0F)
          lineToRelative(3.815F, 4.723F)
          curveToRelative(0.528F, 0.654F, 0.062F, 1.628F, -0.778F, 1.628F)
          horizontalLineTo(5.797F)
          close()        
      }
    }
    return _caretUp20!!
  }

private var _caretUp20: ImageVector? = null
