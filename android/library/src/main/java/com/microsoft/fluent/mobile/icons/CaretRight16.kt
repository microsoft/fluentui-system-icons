package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretRight16: ImageVector
  get() {
    if (_caretRight16 != null) {
      return _caretRight16!!
    }
    _caretRight16 = fluentIcon(name = "Regular.CaretRight16", 16f) {
      materialPath {
          moveTo(7.571F, 11.84F)
          curveTo(6.908F, 12.298F, 6.0F, 11.827F, 6.0F, 11.024F)
          verticalLineTo(4.975F)
          curveTo(6.0F, 4.172F, 6.908F, 3.701F, 7.571F, 4.16F)
          lineToRelative(3.784F, 2.617F)
          curveToRelative(0.858F, 0.593F, 0.858F, 1.854F, 0.0F, 2.447F)
          lineTo(7.571F, 11.84F)
          close()
          moveTo(7.0F, 11.024F)
          lineToRelative(3.784F, -2.616F)
          curveToRelative(0.286F, -0.198F, 0.286F, -0.619F, 0.0F, -0.816F)
          lineTo(7.0F, 4.975F)
          verticalLineToRelative(6.049F)
          close()        
      }
    }
    return _caretRight16!!
  }

private var _caretRight16: ImageVector? = null
