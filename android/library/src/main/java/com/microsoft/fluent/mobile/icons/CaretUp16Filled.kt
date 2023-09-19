package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretUp16: ImageVector
  get() {
    if (_caretUp16 != null) {
      return _caretUp16!!
    }
    _caretUp16 = fluentIcon(name = "Filled.CaretUp16", 16f) {
      materialPath {
          moveTo(4.957F, 10.998F)
          curveToRelative(-0.808F, 0.0F, -1.282F, -0.908F, -0.821F, -1.571F)
          lineToRelative(2.633F, -3.784F)
          curveToRelative(0.596F, -0.858F, 1.865F, -0.858F, 2.462F, 0.0F)
          lineToRelative(2.633F, 3.784F)
          curveToRelative(0.461F, 0.663F, -0.013F, 1.571F, -0.821F, 1.571F)
          horizontalLineTo(4.957F)
          close()        
      }
    }
    return _caretUp16!!
  }

private var _caretUp16: ImageVector? = null
