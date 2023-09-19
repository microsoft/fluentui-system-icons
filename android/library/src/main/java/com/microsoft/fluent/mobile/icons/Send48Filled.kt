package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Send48: ImageVector
  get() {
    if (_send48 != null) {
      return _send48!!
    }
    _send48 = fluentIcon(name = "Filled.Send48", 48f) {
      materialPath {
          moveTo(7.262F, 4.244F)
          curveTo(5.475F, 3.351F, 3.497F, 5.056F, 4.116F, 6.955F)
          lineTo(8.13F, 19.26F)
          curveToRelative(0.232F, 0.71F, 0.838F, 1.23F, 1.573F, 1.353F)
          lineToRelative(15.86F, 2.643F)
          curveToRelative(0.835F, 0.14F, 0.835F, 1.34F, 0.0F, 1.48F)
          lineTo(9.704F, 27.378F)
          curveTo(8.969F, 27.5F, 8.363F, 28.022F, 8.132F, 28.73F)
          lineTo(4.116F, 41.042F)
          curveToRelative(-0.62F, 1.9F, 1.359F, 3.605F, 3.146F, 2.712F)
          lineToRelative(35.494F, -17.742F)
          curveToRelative(1.659F, -0.83F, 1.659F, -3.197F, 0.0F, -4.026F)
          lineTo(7.262F, 4.244F)
          close()        
      }
    }
    return _send48!!
  }

private var _send48: ImageVector? = null
