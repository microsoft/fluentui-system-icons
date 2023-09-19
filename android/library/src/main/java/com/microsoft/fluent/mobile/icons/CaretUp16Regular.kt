package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretUp16: ImageVector
  get() {
    if (_caretUp16 != null) {
      return _caretUp16!!
    }
    _caretUp16 = fluentIcon(name = "Regular.CaretUp16", 16f) {
      materialPath {
          moveTo(4.136F, 9.427F)
          curveToRelative(-0.461F, 0.663F, 0.013F, 1.571F, 0.82F, 1.571F)
          horizontalLineToRelative(6.087F)
          curveToRelative(0.808F, 0.0F, 1.282F, -0.908F, 0.82F, -1.571F)
          lineTo(9.232F, 5.643F)
          curveToRelative(-0.597F, -0.858F, -1.866F, -0.858F, -2.462F, 0.0F)
          lineTo(4.136F, 9.427F)
          close()
          moveToRelative(0.82F, 0.571F)
          lineTo(7.59F, 6.214F)
          curveToRelative(0.2F, -0.286F, 0.622F, -0.286F, 0.821F, 0.0F)
          lineToRelative(2.633F, 3.784F)
          horizontalLineTo(4.957F)
          close()        
      }
    }
    return _caretUp16!!
  }

private var _caretUp16: ImageVector? = null
