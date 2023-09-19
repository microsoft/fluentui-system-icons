package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretLeft24: ImageVector
  get() {
    if (_caretLeft24 != null) {
      return _caretLeft24!!
    }
    _caretLeft24 = fluentIcon(name = "Regular.CaretLeft24", 24f) {
      materialPath {
          moveTo(12.927F, 18.839F)
          curveTo(13.735F, 19.546F, 15.0F, 18.972F, 15.0F, 17.899F)
          verticalLineTo(6.101F)
          curveToRelative(0.0F, -1.074F, -1.265F, -1.648F, -2.073F, -0.94F)
          lineToRelative(-6.31F, 5.521F)
          curveToRelative(-0.798F, 0.697F, -0.798F, 1.937F, 0.0F, 2.634F)
          lineToRelative(6.31F, 5.522F)
          close()
          moveToRelative(0.573F, -1.492F)
          lineToRelative(-5.896F, -5.159F)
          curveToRelative(-0.114F, -0.1F, -0.114F, -0.276F, 0.0F, -0.376F)
          lineTo(13.5F, 6.653F)
          verticalLineToRelative(10.694F)
          close()        
      }
    }
    return _caretLeft24!!
  }

private var _caretLeft24: ImageVector? = null
